import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import '../../Css/blogs-brands-categories.css';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { categories } from '../../components/data';

export default function CreateCategory() {
  const queryParams = new URLSearchParams(window.location.search);
  const edit = queryParams.get('edit');

  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
    defaultValues: {
      types: []
    }
  });

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "types"
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [specError, setSpecError] = useState({});

  useEffect(() => {
    if (edit) {
      const categoryToEdit = categories.find(category => category.id === edit);
      if (categoryToEdit) {
        const { id: categoryName, list = [] } = categoryToEdit;
        setValue('categoryName', categoryName);
        if (list.length > 0) {
          const [firstType] = list;
          setValue('types', [
            {
              typeName: firstType.id,
              specificAttributes: Object.keys(firstType.specific).map(attr => ({
                attributeName: attr,
                values: firstType.specific[attr].join(', '),
              })),
            },
          ]);
          for (let i = 1; i < list.length; i++) {
            const type = list[i];
            setValue(`types.${i}.typeName`, type.id);
            setValue(`types.${i}.specificAttributes`, Object.keys(type.specific).map(attr => ({
              attributeName: attr,
              values: type.specific[attr].join(', '),
            })));
          }
        }
      }
    }
  }, [edit, setValue]);

  const onSubmit = (data) => {
    const formData = {
      id: data.categoryName,
      list: data.types.map(type => ({
        id: type.typeName,
        specific: type.specificAttributes.reduce((acc, curr) => {
          acc[curr.attributeName] = curr.values.split(',').map(val => val.trim());
          return acc;
        }, {})
      }))
    };
    console.log(formData);
  };

  const removeSpecificAttribute = (typeIndex, attrIndex) => {
    const currentType = fields[typeIndex];
    const newSpecificAttributes = currentType.specificAttributes.filter((_, i) => i !== attrIndex);
    update(typeIndex, { ...currentType, specificAttributes: newSpecificAttributes });
  };

  const addSpecificAttribute = (typeIndex) => {
    const currentType = fields[typeIndex];
    const specificAttributes = currentType.specificAttributes;
    if (specificAttributes[specificAttributes.length - 1].attributeName && specificAttributes[specificAttributes.length - 1].values) {
      const newSpecificAttributes = [...specificAttributes, { attributeName: '', values: '' }];
      update(typeIndex, { ...currentType, specificAttributes: newSpecificAttributes });
      setSpecError({});
    } else {
      setSpecError({ typeIndex });
    }
  };

  const addMoreTypes = () => {
    const lastTypeIndex = fields.length - 1;
    const lastType = fields[lastTypeIndex];
    const isValidType = lastType && lastType.typeName && lastType.specificAttributes.every(attr => attr.attributeName && attr.values);

    if (lastTypeIndex === fields.length - 1 || isValidType) {
      append({ typeName: '', specificAttributes: [{ attributeName: '', values: '' }] });
    }
  };
  
  return (
    <div className='create-category container'>
      <h2 className="sectionTitle">{edit ? 'Edit Categorie' : 'Add Categorie'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formHolder">
          <div className={`inputHolder ${errors.categoryName ? 'notvalid' : ''}`}>
            <h6 className="placeHolder" onClick={() => document.getElementById('categoryName').focus()}>Category Name</h6>
            <div className="holder">
              <input
                type="text"
                id="categoryName"
                {...register("categoryName", {
                  required: "Please enter the category name",
                  minLength: {
                    value: 3,
                    message: "Please enter at least 3 characters"
                  }
                })}
                placeholder="Category Name"
              />
            </div>
            {errors.categoryName && (
              <span>
                <AiOutlineExclamationCircle />
                {errors.categoryName.message}
              </span>
            )}
          </div>

          <div className="typesHolder">
            {fields.map((field, typeIndex) => (
              <div key={field.id} className="typeHolder">
                <div className={`inputHolder ${errors.types?.[typeIndex]?.typeName ? 'notvalid' : ''}`}>
                <h6 className="placeHolder" onClick={() => document.getElementById('typename').focus()}>Type Name</h6>
                  <div className="holder">
                    <input
                      type="text"
                      id='typename'
                      placeholder="Type Name"
                      {...register(`types.${typeIndex}.typeName`, { required: "Please Enter The Type Name" })}
                      defaultValue={field.typeName}
                    />
                    <button type="button" className="remove" onClick={() => remove(typeIndex)}><IoCloseSharp /></button>
                  </div>
                  {errors.types?.[typeIndex]?.typeName && (
                    <span className="error">
                      <AiOutlineExclamationCircle />
                      {errors.types[typeIndex].typeName.message}
                    </span>
                  )}
                </div>

                <div className="specificHolder">
                  {field.specificAttributes.map((attr, attrIndex) => (
                    <div key={attrIndex} className="inputHolder holder">
                      <input
                        type="text"
                        placeholder="Specific Name"
                        {...register(`types.${typeIndex}.specificAttributes.${attrIndex}.attributeName`, { required: "Required" })}
                        defaultValue={attr.attributeName}
                      />
                      <input
                        type="text"
                        placeholder=" XXX  ,  XXX  , XXX "
                        {...register(`types.${typeIndex}.specificAttributes.${attrIndex}.values`, { required: "Required" })}
                        defaultValue={attr.values}
                      />
                      <button type="button" className="remove" onClick={() => removeSpecificAttribute(typeIndex, attrIndex)}>x</button>
                    </div>
                  ))}
                  <div className="btnHolder">
                    {specError?.typeIndex === typeIndex && (
                      <span className="error">
                        <AiOutlineExclamationCircle />
                        please enter the last key and value first
                      </span>
                    )}
                    <button type="button" className='secondBtn' onClick={() => addSpecificAttribute(typeIndex)}>
                      Add More specific
                    </button>
                  </div>

                </div>
              </div>
            ))}
            <button type="button" style={{ alignSelf: 'center'}} className="main-buttom" onClick={addMoreTypes}>
              Add More Types
            </button>
          </div>
          <button type="submit" className="main-buttom" onClick={() => setIsSubmitted(true)}>
          {edit ? 'Update Categorie' : 'Add Categorie'}
          </button>
        </div>
      </form>
    </div>
  );
}
