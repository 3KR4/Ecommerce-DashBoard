import { MdAttachMoney } from "react-icons/md";
import { FaFileAlt, FaUserPlus } from "react-icons/fa";
import { IoLogoBuffer } from "react-icons/io5";

export const cardsData = [
  {
    title: "Total Sales",
    value: "$15K",
    svg: MdAttachMoney,
  },
  {
    title: "Total Orders",
    value: "300",
    svg: FaFileAlt,
  },
  {
    title: "Products Sold",
    value: "05",
    svg: IoLogoBuffer,
  },
  {
    title: "New Customers",
    value: "08",
    svg: FaUserPlus,
  },
];
export const landing = {
  slides: [
    {
      id: 1,
      img: require('../img/swiper1.png'),
      link: 'https://www.google.com'
    },
    {
      id: 2,
      img: require('../img/swiper2.png'),
      link: 'https://www.google.com'
    },
    {
      id: 3,
      img: require('../img/swiper3.png'),
      link: 'https://www.google.com'
    },
    {
      id: 4,
      img: require('../img/swiper4.jpg'),
      link: 'https://www.google.com'
    },
    {
      id: 5,
      img: require('../img/swiper5.png'),
      link: 'https://www.google.com'
    },
    {
      id: 6,
      img: require('../img/swiper6.png'),
      link: 'https://www.google.com'
    },
    {
      id: 7,
      img: require('../img/swiper7.jpg'),
      link: 'https://www.google.com'
    },
  ],
  section: [
    {
      id: 1,
      img: require('../img/landing01.jpg'),
      link: 'asd'
    },
    {
      id: 2,
      img: require('../img/landing01.jpg'),
      link: 'asd'
    },
    {
      id: 3,
      img: require('../img/landing03.jpg'),
      link: 'asd'
    },
    {
      id: 4,
      img: require('../img/landing04.jpg'),
      link: 'asd'
    },
  ]
}
export const about = [
  {
    id: 1,
    head: "About Us",
    bodys: [
      "We are a leading hardware store committed to providing the best products and services to our customers.",
      "Our extensive range of products includes the latest in technology and hardware solutions."
    ]
  },
  {
    id: 2,
    head: "Our Locations",
    bodys: [
      "Visit our main store located at 123 Hardware St, Tech City.",
      "We also have branches in other major cities to serve you better."
    ]
  },
  {
    id: 3,
    head: "After Sales Service",
    bodys: [
      "We offer comprehensive after-sales services including repairs and maintenance.",
      "Our dedicated support team is always ready to assist you with any issues you may face."
    ]
  },
  {
    id: 4,
    head: "Fast Shipping",
    bodys: [
      "Enjoy fast and reliable shipping on all orders.",
      "We ensure that your products reach you in the shortest possible time."
    ]
  },
  {
    id: 5,
    head: "Contact Numbers",
    bodys: [
      "Reach us at our customer support number: +123-456-7890.",
      "For sales inquiries, call us at: +123-456-7891."
    ]
  }
];

export const categories = [
  {
    id: "hardware",
    list: [
      { 
        id: "graphic card",
        specific: {
          series: ['rtx 2000','rtx 3000','rtx 4000','rx 5000', 'rx 6000'],
          memory: ['2gb','4gb','6gb','8gb','12gb','16gb','24gb']
        }
      },
      { 
        id: "motherboard",
        img: require('../img/Categories/mother.png'),
        specific: {
          gen: ['ddr3','ddr4','ddr5'],
          mhz: ['2666 mhz', '3200 mhz', '3600 mhz', '4200 mhz', '5600 mhz']
        }
      },
      { 
        id: "procesor", 
        img: require('../img/Categories/cpu.png'), 
        specific: {
          series: ['i3', 'i5', 'i7', 'i9', 'Ryzen 3', 'Ryzen 5', 'Ryzen 7', 'Ryzen 9'],
          cores: [2, 4, 6, 8, 12, 16, 32],
          threads: [4, 8, 12, 16, 24, 32, 64],
          socket: ['LGA1200', 'LGA1151', 'AM4', 'sTRX4', 'sWRX8']
        }
      },
      { 
        id: "memory",
        img: require('../img/Categories/ram.png'), 
        specific: {
          type: ['DDR3', 'DDR4', 'DDR5'],
          speed: ['2133 MHz', '2400 MHz', '2666 MHz', '3000 MHz', '3200 MHz', '3600 MHz']
        }
      },
      { 
        id: "storage", 
        img: require('../img/Categories/storage.png'), 
        specific: {
          type: ['HDD', 'SSD', 'NVMe SSD', 'External HDD', 'External SSD'],
          capacity: ['250GB', '500GB', '1TB', '2TB', '4TB', '8TB', '16TB']
        }
      },
      { 
        id: "liquid cooling", 
        img: require('../img/Categories/liquid cooling.png'), 
        specific: {
          type: ['AIO Liquid Cooler', 'Custom Liquid Cooling Kit'],
          radiatorSize: ['120mm', '240mm', '360mm'],
          pumpSpeed: ['1000 RPM', '1500 RPM', '2000 RPM']
        }
      },
      { 
        id: "power supply", 
        img: require('../img/Categories/power.png'), 
        specific: {
          wattage: ['450W', '550W', '650W', '750W', '850W', '1000W', '1200W'],
          efficiency: ['80+ Bronze', '80+ Silver', '80+ Gold', '80+ Platinum', '80+ Titanium']
        }
      },
      { 
        id: "desktop case",
        img: require('../img/Categories/case.png'), 
        specific: {
          type: ['ATX Mid Tower', 'ATX Full Tower', 'MicroATX Tower', 'Mini-ITX Tower'],
          color: ['Black', 'White', 'Silver', 'Red', 'Blue', 'Green']
        }
      },
    ],
  },
  {
    id: "accessories",
    list: [
      { 
        id: "mouse",
        img: require('../img/Categories/mouse.png'), 
        specific: {
          type: ['Wired Mouse', 'Wireless Mouse', 'Gaming Mouse'],
          DPI: ['800', '1200', '1600', '2400', '3200', '4800', '6400', '16000']
        }
      },
      { 
        id: "keyboard",
        img: require('../img/Categories/keyboard.png'), 
        specific: {
          type: ['Mechanical Keyboard', 'Membrane Keyboard', 'Gaming Keyboard'],
          switchType: ['Cherry MX', 'Romer-G', 'Blue Switch', 'Red Switch']
        }
      },
      { 
        id: "headphone", 
        img: require('../img/Categories/headphone.png'), 
        specific: {
          type: ['Over-Ear', 'On-Ear', 'In-Ear'],
          impedance: ['16 Ohms', '32 Ohms', '64 Ohms', '150 Ohms', '300 Ohms']
        }
      },
      { 
        id: "speakers", 
        img: require('../img/Categories/speakers.png'), 
        specific: {
          type: ['2.0 Speakers', '2.1 Speakers', '5.1 Surround Sound Speakers'],
          powerOutput: ['10W', '20W', '50W', '100W', '200W']
        }
      },
      { 
        id: "mousepad", 
        img: require('../img/Categories/mousebad.png'), 
        specific: {
          size: ['Small', 'Medium', 'Large', 'Extended'],
          material: ['Cloth', 'Hard Surface', 'Hybrid']
        }
      },
    ],
  },
  {
    id: "electronics",
    list: [
      { 
        id: "Smartwatches", 
        img: require('../img/Categories/smartwatch.png'), 
        specific: {
          brand: ['Apple', 'Samsung', 'Garmin', 'Fitbit', 'Huawei'],
          OS: ['WatchOS', 'Tizen', 'WearOS', 'Fitbit OS', 'RTOS']
        }
      },
      { 
        id: "smartphones",
        img: require('../img/Categories/iphone 15.png'), 
        specific: {
          OS: ['iOS', 'Android'],
          displaySize: ['5.5"', '6.0"', '6.5"', '6.7"', '7.0"', '7.2"']
        }
      },
      { 
        id: "laptops",
        img: require('../img/Categories/notebock.png'), 
        specific: {

          screenSize: ['13"', '14"', '15.6"', '16"', '17"'],
          CPU: ['Intel Core i5', 'Intel Core i7', 'AMD Ryzen 5', 'AMD Ryzen 7']
        }
      },
      { 
        id: "tablets", 
        img: require('../img/Categories/tablet.png'), 
        specific: {
          screenSize: ['7.9"', '9.7"', '10.2"', '10.5"', '11"', '12.9"'],
          OS: ['iOS', 'Android', 'Windows']
        }
      },
      { 
        id: "cameras", 
        img: require('../img/Categories/camera.png'), 
        specific: {
          type: ['DSLR', 'Mirrorless', 'Point-and-Shoot'],
          resolution: ['16MP', '24MP', '32MP', '48MP', '64MP']
        }
      },
      { 
        id: "webcams", 
        img: require('../img/Categories/webcam.png'), 
        specific: {
          resolution: ['720p', '1080p', '4K'],
          frameRate: ['30fps', '60fps', '120fps']
        }
      },
      { 
        id: "microphones", 
        img: require('../img/Categories/microphone.png'), 
        specific: {
          type: ['USB Microphone', 'XLR Microphone'],
          polarPattern: ['Cardioid', 'Bidirectional', 'Omnidirectional']
        }
      },
    ],
  },
  {
    id: "monitor",
    list: [
      { 
        id: "monitor",
        img: require('../img/Categories/monitor.png'), 
        specific: {
          screenSize: ['24"', '27"', '32"', '34"', '38"', '49"'],
          resolution: ['1080p', '1440p', '4K'],
          refreshRate: ['60Hz', '75Hz', '120Hz', '144Hz', '240Hz']
        }
      },
      { 
        id: "television",
        img: require('../img/Categories/tv-samsung.png'), 
        specific: {
          screenSize: ['32"', '43"', '55"', '65"', '75"', '85"'],
          resolution: ['1080p', '4K', '8K'],
          smartFeatures: ['Smart TV', 'Voice Assistant', 'Smart Hub']
        }
      },
    ],
  },
  {
    id: "console",
    list: [
      { 
        id: "console",
        img: require('../img/Categories/console.png'),
        specific: {
          resolution: ['1080p', '4K'],
          storageCapacity: ['500GB', '1TB', '2TB'],
          controllerType: ['DualShock', 'Xbox Wireless Controller', 'Joy-Con']
        }
      },
      { 
        id: "xbox",
        img: require('../img/Categories/xbox.png'), 
        specific: {
          model: ['Xbox Series X', 'Xbox Series S', 'Xbox One X', 'Xbox One S'],
          resolution: ['1080p', '1440p', '4K'],
          storageCapacity: ['1TB', '2TB'],
          controllerType: ['Xbox Wireless Controller', 'Xbox Elite Wireless Controller']
        }
      },
      { 
        id: "nitendo",
        img: require('../img/Categories/nitendo.png'), 
        specific: {
          model: ['Nintendo Switch', 'Nintendo Switch Lite'],
          resolution: ['720p', '1080p'],
          batteryLife: ['3-4 hours', '4.5-9 hours']
        }
      },
      { 
        id: "game bad",
        img: require('../img/Categories/gamebad.png'), 
        specific: {
          type: ['Gaming Chair', 'Racing Simulator Cockpit', 'Bean Bag Chair'],
          material: ['PU Leather', 'Fabric', 'Mesh']
        }
      },
    ],
  },
  {
    id: "other",
    list: [
      { 
        id: "chair",
        img: require('../img/Categories/chair.png'), 
        specific: {
          type: ['Office Chair', 'Gaming Chair', 'Ergonomic Chair'],
          weightCapacity: ['250 lbs', '300 lbs', '400 lbs'],
          recline: ['90°-180°', '135°-180°', '140°-180°']
        }
      },
      { 
        id: "holder",
        img: require('../img/Categories/holder.png'), 
        specific: {
          type: ['Phone Holder', 'Tablet Holder', 'Laptop Stand'],
          material: ['Aluminum', 'ABS Plastic', 'Wood']
        }
      },
      { 
        id: "fans",
        img: require('../img/Categories/fans.png'), 
        specific: {
          size: ['80mm', '120mm', '140mm', '200mm'],
          speed: ['1000 RPM', '1200 RPM', '1500 RPM', '1800 RPM']
        }
      },
      { 
        id: "cables",
        img: require('../img/Categories/cables.png'), 
        specific: {
          type: ['HDMI Cable', 'DisplayPort Cable', 'USB-C Cable'],
          length: ['3ft', '6ft', '10ft', '15ft', '25ft']
        }
      },
      { 
        id: "gaming desk",
        img: require('../img/Categories/gamingdesk.png'), 
        specific: {
          type: ['Gaming Desk', 'Standing Desk', 'L-Shaped Desk'],
          size: ['Small', 'Medium', 'Large']
        }
      },
      { 
        id: "led strip",
        img: require('../img/Categories/ledstrip.png'), 
        specific: {
          length: ['1m', '2m', '3m', '5m', '10m'],
          color: ['RGB', 'RGBW', 'RGBWW']
        }
      },
      { 
        id: "thermal paste",
        img: require('../img/Categories/thermalpaste.png'), 
        specific: {
          type: ['Carbon Based', 'Metal Oxide', 'Ceramic'],
          thermalConductivity: ['5.0 W/mK', '7.5 W/mK', '10.0 W/mK']
        }
      },
    ],
  },
];
export const brands = [
  {
    id: "nvidia",
    img: require('../img/brands/nvidia.png'),
    produce: ["graphic card", "monitor", "motherboard"]
  },
  {
    id: "amd",
    img: require('../img/brands/amd.png'),
    produce: ["procesor", "graphic card", "motherboard"]
  },
  {
    id: "asrock",
    img: require('../img/brands/asrock.png'),
    produce: ["motherboard"]
  },
  {
    id: "benq",
    img: require('../img/brands/benq.png'),
    produce: ["monitor", "projector"]
  },
  {
    id: "cougar",
    img: require('../img/brands/cougar.png'),
    produce: ["mouse", "keyboard", "headphone", "mousepad", "gaming desk", "chair"]
  },
  {
    id: "dell",
    img: require('../img/brands/dell.png'),
    produce: ["monitor", "laptops", "desktop case"]
  },
  {
    id: "gskill",
    img: require('../img/brands/gskill.png'),
    produce: ["memory"]
  },
  {
    id: "corsair",
    img: require('../img/brands/corsair.png'),
    produce: ["memory", "storage", "liquid cooling", "power supply", "desktop case", "mouse", "keyboard", "headphone", "speakers", "mousepad", "gaming desk", "led strip", "thermal paste"]
  },
  {
    id: "gigabyte",
    img: require('../img/brands/gigabyte.png'),
    produce: ["motherboard"]
  },
  {
    id: "aoc",
    img: require('../img/brands/aoc.png'),
    produce: ["monitor"]
  },
  {
    id: "hp",
    img: require('../img/brands/hp.webp'),
    produce: ["monitor", "laptops", "desktop case", "printer"]
  },
  {
    id: "hyperx",
    img: require('../img/brands/hyperx.png'),
    produce: ["mouse", "keyboard", "headphone", "mousepad"]
  },
  {
    id: "intel",
    img: require('../img/brands/intel.png'),
    produce: ["procesor", "motherboard", "memory", "storage"]
  },
  {
    id: "kingston",
    img: require('../img/brands/kingston.png'),
    produce: ["memory", "storage"]
  },
  {
    id: "lenovo",
    img: require('../img/brands/lenovo.png'),
    produce: ["laptops", "desktop case", "tablets", "smartphones", "smartwatches", "monitor"]
  },
  {
    id: "lg",
    img: require('../img/brands/lg.png'),
    produce: ["monitor", "television"]
  },
  {
    id: "logitech",
    img: require('../img/brands/logitech.png'),
    produce: ["mouse", "keyboard", "headphone", "speakers", "webcams"]
  },
  {
    id: "asus",
    img: require('../img/brands/asus.png'),
    produce: ["monitor", "motherboard", "graphic card", "laptops", "desktop case", "mouse", "keyboard", "headphone", "speakers", "smartphones", "tablets"]
  },
  {
    id: "msi",
    img: require('../img/brands/msi.png'),
    produce: ["monitor", "motherboard", "graphic card", "laptops", "desktop case"]
  },
  {
    id: "nzxt",
    img: require('../img/brands/nzxt.png'),
    produce: ["liquid cooling", "desktop case", "led strip", "fans"]
  },
  {
    id: "acer",
    img: require('../img/brands/acer.png'),
    produce: ["monitor", "laptops", "desktop case", "tablets", "smartphones"]
  },
  {
    id: "redragon",
    img: require('../img/brands/redragon.png'),
    produce: ["mouse", "keyboard", "headphone", "mousepad"]
  },
  {
    id: "razer",
    img: require('../img/brands/razer.png'),
    produce: ["mouse", "keyboard", "headphone", "mousepad", "speakers", "gaming monitor"]
  },
  {
    id: "samsung",
    img: require('../img/brands/samsung.png'),
    produce: ["monitor", "smartphones", "tablets", "television"]
  },
  {
    id: "seagate",
    img: require('../img/brands/seagate.png'),
    produce: ["storage"]
  },
  {
    id: "steelseries",
    img: require('../img/brands/steelseries.png'),
    produce: ["mouse", "keyboard", "headphone", "mousepad"]
  },
  {
    id: "toshipa",
    img: require('../img/brands/toshipa.png'),
    produce: ["laptops", "storage"]
  },
  {
    id: "xpg",
    img: require('../img/brands/xpg.png'),
    produce: ["memory", "storage"]
  },
  {
    id: "zotac",
    img: require('../img/brands/zotac.png'),
    produce: ["graphic card", "motherboard"]
  },
];
export const allProducts = [  
  {
    id: 1,
    type: "mouse",
    category: "accessories",
    name: "XPG INFAREX M10",
    price: 26.00,
    sale: 0,
    reviews: 4,
    stock: 5,
    stars: 4.5,
    brand: 'xpg',
    Images: [require('../img/xpg.png'), require('../img/xpg2.png'), require('../img/xpg3.png'), require('../img/xpg4.png'), require('../img/xpg5.png')],
    tags: ['asdasdasdasdad', 'asdasdasxasdasdad', 'asasdasdxxxdasdasdasdad', 'asdasdaasdasd asda cxvad', 'asdaszxczxczxcdasdasdaasd aSdZXcd'],
    details:"ASUS TUF Gaming VG289Q1A 28” Monitor, 4K UHD (3840 x 2160), IPS, Adaptive-Sync/ FreeSync, Eye Care, DisplayPort HDMI, DCI-P3 HDR 10, Shadow Boost, Black.",
    about: "Interface: USB Type-A\nSwitch: Mechanical Switches with 20-Million clicks rating\nDPI: 400/800/1600/3200/6400/12000\nWarranty: 2 Year Limited",
    specifications: {
      'Product Dimensions':'5.04 x 3.07 x 1.57 inches',
      'Item Weight':'3.49 ounces',
      'ASIN':'B0B5BDSPFD',
      'Item model number':'ALPHAWL-BKCWW',
      'Batteries':'1 Lithium Polymer batteries required. (included)',
      'Best Sellers Rank':'#165,627 in Video Games asdasd asdasd (See Top 100 in Video Games)#5,903 in PC Gaming Mice',
      'Date First Available':'June 28, 2022',
      'Manufacturer':'ADATA',
    },
    testimonies: [
      {
        id: 1,
        name: 'Mahmoud Elshazly',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        stars: 5,
      },
      {
        id: 2,
        name: 'Ahmed Hani',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        stars: 4.5,
      },
      {
        id: 3,
        name: 'Ahmed Shalapy',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        stars: 4,
      },
      {
        id: 4,
        name: 'Chalipha Mo3tasem',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        stars: 3.5,
      },
    ],
    Tags: ['Wired Mouse', '3200']
  },
  {
    id: 2,
    type: "motherboard",
    category: "hardware",
    name: "Asus Rog Strix Z790",
    price: 390.00,
    sale: 0,
    reviews: 54,
    stars: 3.5,
    stock: 0,
    brand: 'Asus',
    Images: [require('../img/asus motherboard.png')],
    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
    Tags: ['DDR4', '3200 MHz']
  },
  {
    id: 3,
    type: "headphone",
    category: "accessories",
    name: "Logitech G PRO X",
    price: 200.00,
    sale: 15,
    reviews: 12,
    stars: 5.0,
    stock: 13,
    brand: 'Logitech',
    Images: [require('../img/logi headphone.png'), require('../img/logi headphone.png'), require('../img/logi headphone.png'), require('../img/logi headphone.png'), require('../img/logi headphone.png')],
    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
    Tags: ['Gaming Headphone', 'Wired Headphone']
  },
  {
    id: 4,
    type: "monitor",
    category: "monitor",
    name: "Msi G244F24 170HZ",
    price: 1240.00,
    sale: 8,
    reviews: 25,
    stars: 3.5,
    stock: 0,
    brand: 'Msi',
    Images: [require('../img/msi monitor.png'), require('../img/msi monitor.png'), require('../img/msi monitor.png'), require('../img/msi monitor.png'), require('../img/msi monitor.png')],
    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
    Tags: ['Gaming Monitor', '4K', '160hrz']
  },
  {
    id: 5,
    type: "m.2",
    category: "hardware",
    name: "AORUS NVMe Gen4",
    price: 100.00,
    sale: 3,
    reviews: 75,
    stars: 4.9,
    stock: 22,
    brand: 'AORUS',
    Images: [require('../img/aorus nvme.png'), require('../img/aorus nvme.png'), require('../img/aorus nvme.png'), require('../img/aorus nvme.png'), require('../img/aorus nvme.png')],
    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
    Tags: ['NVMe Gen4', '500GB']
  },
  {
    id: 6,
    type: "chair",
    category: "other",
    name: "Cougar Outrider S",
    price: 20.00,
    sale: 9,
    reviews: 105,
    stars: 4.5,
    stock: 3,
    brand: 'Cougar',
    Images: [require('../img/couger chair.png'), require('../img/couger chair.png'), require('../img/couger chair.png'), require('../img/couger chair.png'), require('../img/couger chair.png')],
    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
    Tags: ['Gaming Chair']
  },
  {
    id: 7,
    type: "joystick",
    category: "accessories",
    name: "ps4 controlar",
    price: 30.00,
    sale: 12,
    reviews: 230,
    stars: 5.0,
    stock: 76,
    brand: 'sony',
    Images: [require('../img/ps4 controlar.png'), require('../img/ps4 controlar.png'), require('../img/ps4 controlar.png'), require('../img/ps4 controlar.png'), require('../img/ps4 controlar.png')],
    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
    Tags: ['PS4 Controller', 'Wireless Controller']
  },
  {
    id: 8,
    type: "watch",
    category: "other",
    name: "M75 Sport Watch",
    price: 380.00,
    sale: 7,
    reviews: 12,
    stars: 5.0,
    stock: 34,
    brand: '',
    Images: [require('../img/watsh.png'), require('../img/watsh.png'), require('../img/watsh.png'), require('../img/watsh.png'), require('../img/watsh.png')],
    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
    Tags: ['Sport Watch', 'Waterproof']
  },
  {
    id: 9,
    type: "graphic card",
    category: "hardware",
    name: "Aorus 4060ti",
    price: 350.00,
    sale: 15,
    reviews: 46,
    stars: 4.3,
    stock: 9,
    brand: 'Aorus',
    Images: [require('../img/rtx 4060ti.png'), require('../img/rtx 4060ti.png'), require('../img/rtx 4060ti.png'), require('../img/rtx 4060ti.png'), require('../img/rtx 4060ti.png')],
    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
    Tags: ['RTX 4000', '8GB']
  },
  {
    id: 10,
    type: "console",
    category: "other",
    name: "ps4 pro",
    price: 290.00,
    sale: 18,
    reviews: 309,
    stars: 5.0,
    stock: 12,
    brand: 'sony',
    Images: [require('../img/Ps4.png'), require('../img/Ps4.png'), require('../img/Ps4.png'), require('../img/Ps4.png'), require('../img/Ps4.png')],
    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    about:[
      "Interface: USB Type-A",
      "Switch: Mechanical Switches with 20-Million clicks rating",
      "DPI: 400/800/1600/3200/6400/12000",
      "Warranty: 2 Year Limited"
    ],
    Tags: ['PS4 Pro', '1TB']
  },
];
export const blogs = [
  {
    id: 1,
    title: 'Interesting  asdasdas dasda sdas dfact about gaming consoles',
    type: 'Gaming',
    details: 'Lorem i asdas kjdaskj daskjld kjlas dkjlaskjdlas kjldjklasd kjlasd kljaskljd askljdjklasd kjlsadkljaskjldsakljdsakljdkjlsadkjlsadk jlsa asd asjk dkjas djkasd jkasd kjaskj daskjld kjlaskjdlasd asd as dpsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    img: require('../img/swiper1.png'),
    link: '',
    tags: ['','',''],
    comments: [
      {
        userId: 1,
        name: 'John Doe',
        details: 'Interesting fact about gaming consoles',
        replys: [
          {
            userId: 2,
            name: 'Jane Doe',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            replys: [
              {
                userId: 3,
                name: 'Alice',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Interesting fact about gaming consoles',
              },
              {
                userId: 4,
                name: 'Bob',
                details: '44444444444444444444444444444444444444',
              },
            ],
          },
        ],
      },
      {
        userId: 5,
        name: 'Eve',
        details: 'xxxxxxxxxxxx',
        replys: [
          {
            userId: 601,
            name: 'asdasdAD',
            details: 'yyyyyyyyyyyyyyyyyyy',
            replys: [
              {
                userId: 710,
                name: 'Carasxc ol',
                details: 'zzzzzzzzzzzzzzzzzzzzzzzzz',
              },
              {
                userId: 845,
                name: 'Davasdasdasdid',
                details: 'wwwwwwwwwwwAS dASd SAd ASd ',
              },
            ],
          },
          {
            userId: 6421,
            name: 'Charlie',
            details: 'yyyyyyyyyyyyyyyyyyy',
            replys: [
              {
                userId: 74534,
                name: 'Caraxc asdol',
                details: 'zzzzzzzzzzzzzzzzzzzzzzzzz',
              },
              {
                userId: 84564,
                name: 'Dav xczxc id',
                details: 'wwwwwwwwxafcas dASd ASd sadasd aswwwwwwwwwwww',
              },
            ],
          },
          {
            userId: 671,
            name: 'Charas dasxc lie',
            details: 'yyyyyyyyyyyyyyyyyyy',
            replys: [
              {
                userId: 704,
                name: 'Car asxczx asDol',
                details: 'zzzzzzzzzzzzzzzzzzzzzzzzz',
              },
              {
                userId: 40415,
                name: 'David AsDad A',
                details: 'wsffffffffffffffffffffffffffffffwwwwww',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Interesting fact about gaming consoles',
    type: 'Gaming',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    img: require('../img/swiper2.png'),
    link: '',
    tags: ['','',''],
    comments: [],
  },
  {
    id: 3,
    title: 'Interesting fact about gaming consoles',
    type: 'Gaming',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    img: require('../img/swiper3.png'),
    link: '',
    tags: ['','',''],
    comments: [],
  },
  {
    id: 4,
    title: 'Interesting fact about gaming consoles',
    type: 'Gaming',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    img: require('../img/swiper4.jpg'),
    link: '',
    tags: ['','',''],
    comments: [],
  },
  {
    id: 5,
    title: 'Interesting fact about gaming consoles',
    type: 'Gaming',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    img: require('../img/swiper5.png'),
    link: '',
    tags: ['','',''],
    comments: [],
  },
  {
    id: 6,
    title: 'Interesting fact about gaming consoles',
    type: 'Gaming',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    img: require('../img/swiper6.png'),
    link: '',
    tags: ['','',''],
    comments: [],
  },
  {
    id: 7,
    title: 'Interesting fact about gaming consoles',
    type: 'Gaming',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    img: require('../img/landing01.jpg'),
    link: '',
    tags: ['','',''],
    comments: [],
  },
  {
    id: 8,
    title: 'Interesting fact about gaming consoles',
    type: 'Gaming',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    img: require('../img/landing02.jpg'),
    link: '',
    tags: ['','',''],
    comments: [],
  },
];
export const orders = [
  {
    id: 1,
    cart: [
      {
        productId: 1,
        productName: "XPG INFAREX M10",
        productPrice: 26.00,
        quantity: 2,
        totalPrice: 52.00,
        image: require('../img/xpg.png'),
        category: "Accessories",
        type: "Mouse",
        sale: 5
      },
      {
        productId: 3,
        productName: "Logitech G PRO X",
        productPrice: 200.00,
        quantity: 1,
        totalPrice: 200.00,
        image: require('../img/asus motherboard.png'),
        category: "Accessories",
        type: "Headset",
        sale: 10
      }
    ],
    totalItems: 3,
    cartTotalPrice: 242.00,
    customer: {
      id: 101,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      address: {
        street: "123 Main St",
        city: "Cairo",
        country: "Egypt"
      }
    },
    payment: "Credit Card",
    shipping: {
      method: "Standard",
      cost: 5.00
    },
    orderStatus: "Processing",
    orderDate: "2024-06-01T10:00:00Z",
    notes: "Please leave the package at the front door if no one is home."
  },
  {
    id: 2,
    cart: [
      {
        productId: 2,
        productName: "Asus Rog Strix Z790",
        productPrice: 390.00,
        quantity: 1,
        totalPrice: 390.00,
        image: require('../img/xpg.png'),
        category: "Hardware",
        type: "Motherboard",
        sale: 15
      },
      {
        productId: 4,
        productName: "Msi G244F24 170HZ",
        productPrice: 1240.00,
        quantity: 1,
        totalPrice: 1240.00,
        image: require('../img/asus motherboard.png'),
        category: "Monitor",
        type: "Gaming Monitor",
        sale: 20
      }
    ],
    totalItems: 2,
    cartTotalPrice: 1555.00,
    customer: {
      id: 102,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      address: {
        street: "456 Oak St",
        city: "New York",
        country: "USA"
      }
    },
    payment: "PayPal",
    shipping: {
      method: "Express",
      cost: 10.00
    },
    orderStatus: "Delivered",
    orderDate: "2024-06-02T10:00:00Z",
    notes: "Please call upon arrival."
  },
  {
    id: 3,
    cart: [
      {
        productId: 5,
        productName: "AORUS NVMe Gen4",
        productPrice: 100.00,
        quantity: 3,
        totalPrice: 300.00,
        image: require('../img/xpg.png'),
        category: "Hardware",
        type: "M.2 SSD",
        sale: 8
      },
      {
        productId: 7,
        productName: "ps4 controlar",
        productPrice: 30.00,
        quantity: 2,
        totalPrice: 60.00,
        image: require('../img/asus motherboard.png'),
        category: "Accessories",
        type: "Game Controller",
        sale: 12
      }
    ],
    totalItems: 5,
    cartTotalPrice: 335.00,
    customer: {
      id: 103,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      phone: "555-123-4567",
      address: {
        street: "789 Elm St",
        city: "Los Angeles",
        country: "USA"
      }
    },
    payment: "Debit Card",
    shipping: {
      method: "Standard",
      cost: 7.00
    },
    orderStatus: "Processing",
    orderDate: "2024-06-03T10:00:00Z",
    notes: "Leave package at reception if not available."
  },
  {
    id: 4,
    cart: [
      {
        productId: 6,
        productName: "Cougar Outrider S",
        productPrice: 20.00,
        quantity: 1,
        totalPrice: 20.00,
        image: require('../img/xpg.png'),
        category: "Other",
        type: "Gaming Chair",
        sale: 0
      },
      {
        productId: 8,
        productName: "M75 Sport Watch",
        productPrice: 380.00,
        quantity: 1,
        totalPrice: 380.00,
        image: require('../img/asus motherboard.png'),
        category: "Other",
        type: "Sport Watch",
        sale: 18
      }
    ],
    totalItems: 2,
    cartTotalPrice: 400.00,
    customer: {
      id: 104,
      name: "Emily Brown",
      email: "emily.brown@example.com",
      phone: "321-555-9876",
      address: {
        street: "101 Pine St",
        city: "Chicago",
        country: "USA"
      }
    },
    payment: "Credit Card",
    shipping: {
      method: "Standard",
      cost: 5.00
    },
    orderStatus: "Delivered",
    orderDate: "2024-06-04T10:00:00Z",
    notes: "Please handle with care."
  },
  {
    id: 5,
    cart: [
      {
        productId: 9,
        productName: "Aorus 4060ti",
        productPrice: 350.00,
        quantity: 2,
        totalPrice: 700.00,
        image: require('../img/xpg.png'),
        category: "Hardware",
        type: "Graphics Card",
        sale: 5
      },
      {
        productId: 10,
        productName: "ps4 pro",
        productPrice: 290.00,
        quantity: 1,
        totalPrice: 290.00,
        image: require('../img/asus motherboard.png'),
        category: "Other",
        type: "Gaming Console",
        sale: 10
      }
    ],
    totalItems: 3,
    cartTotalPrice: 990.00,
    customer: {
      id: 105,
      name: "David Wilson",
      email: "david.wilson@example.com",
      phone: "777-321-6543",
      address: {
        street: "246 Oak St",
        city: "San Francisco",
        country: "USA"
      }
    },
    payment: "PayPal",
    shipping: {
      method: "Express",
      cost: 10.00
    },
    orderStatus: "Processing",
    orderDate: "2024-06-05T10:00:00Z",
    notes: "Handle with care. Fragile items inside."
  },
  {
    id: 6,
    cart: [
      {
        productId: 11,
        productName: "Razer BlackWidow V3",
        productPrice: 150.00,
        quantity: 1,
        totalPrice: 150.00,
        image: require('../img/xpg.png'),
        category: "Accessories",
        type: "Gaming Keyboard",
        sale: 15
      },
      {
        productId: 13,
        productName: "Corsair Vengeance RGB Pro",
        productPrice: 80.00,
        quantity: 2,
        totalPrice: 160.00,
        image: require('../img/asus motherboard.png'),
        category: "Hardware",
        type: "RAM",
        sale: 5
      }
    ],
    totalItems: 3,
    cartTotalPrice: 310.00,
    customer: {
      id: 106,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      phone: "555-987-6543",
      address: {
        street: "555 Maple Ave",
        city: "Toronto",
        country: "Canada"
      }
    },
    payment: "Debit Card",
    shipping: {
      method: "Standard",
      cost: 7.00
    },
    orderStatus: "Delivered",
    orderDate: "2024-06-06T10:00:00Z",
    notes: "Leave package with reception if not at home."
  },
  {
    id: 7,
    cart: [
      {
        productId: 14,
        productName: "Samsung Odyssey G7",
        productPrice: 800.00,
        quantity: 1,
        totalPrice: 800.00,
        image: require('../img/xpg.png'),
        category: "Monitor",
        type: "Curved Gaming Monitor",
        sale: 12
      },
      {
        productId: 16,
        productName: "SteelSeries Arctis 7",
        productPrice: 150.00,
        quantity: 1,
        totalPrice: 150.00,
        image: require('../img/asus motherboard.png'),
        category: "Accessories",
        type: "Wireless Headset",
        sale: 8
      }
    ],
    totalItems: 2,
    cartTotalPrice: 950.00,
    customer: {
      id: 107,
      name: "Emma Davis",
      email: "emma.davis@example.com",
      phone: "234-567-8901",
      address: {
        street: "789 Pine St",
        city: "Vancouver",
        country: "Canada"
      }
    },
    payment: "Credit Card",
    shipping: {
      method: "Express",
      cost: 10.00
    },
    orderStatus: "Processing",
    orderDate: "2024-06-07T10:00:00Z",
    notes: "Handle with care. Fragile items inside."
  },
  {
    id: 8,
    cart: [
      {
        productId: 17,
        productName: "HyperX Cloud II",
        productPrice: 90.00,
        quantity: 2,
        totalPrice: 180.00,
        image: require('../img/xpg.png'),
        category: "Accessories",
        type: "Gaming Headset",
        sale: 15
      },
      {
        productId: 19,
        productName: "Seagate BarraCuda 2TB",
        productPrice: 60.00,
        quantity: 1,
        totalPrice: 60.00,
        image: require('../img/asus motherboard.png'),
        category: "Hardware",
        type: "Hard Drive",
        sale: 5
      }
    ],
    totalItems: 3,
    cartTotalPrice: 240.00,
    customer: {
      id: 108,
      name: "James Wilson",
      email: "james.wilson@example.com",
      phone: "456-789-0123",
      address: {
        street: "222 Elm St",
        city: "London",
        country: "UK"
      }
    },
    payment: "PayPal",
    shipping: {
      method: "Standard",
      cost: 5.00
    },
    orderStatus: "Delivered",
    orderDate: "2024-06-08T10:00:00Z",
    notes: "Leave package with reception if not at home."
  },
  {
    id: 9,
    cart: [
      {
        productId: 20,
        productName: "Nintendo Switch",
        productPrice: 300.00,
        quantity: 1,
        totalPrice: 300.00,
        image: require('../img/xpg.png'),
        category: "Other",
        type: "Gaming Console",
        sale: 10
      },
      {
        productId: 22,
        productName: "Apple AirPods Pro",
        productPrice: 250.00,
        quantity: 1,
        totalPrice: 250.00,
        image: require('../img/asus motherboard.png'),
        category: "Accessories",
        type: "Wireless Earbuds",
        sale: 0
      }
    ],
    totalItems: 2,
    cartTotalPrice: 550.00,
    customer: {
      id: 109,
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
      phone: "987-654-3210",
      address: {
        street: "456 Maple Ave",
        city: "Los Angeles",
        country: "USA"
      }
    },
    payment: "Debit Card",
    shipping: {
      method: "Standard",
      cost: 7.00
    },
    orderStatus: "Processing",
    orderDate: "2024-06-09T10:00:00Z",
    notes: "Signature required upon delivery."
  },
  {
    id: 10,
    cart: [
      {
        productId: 23,
        productName: "Logitech G502 HERO",
        productPrice: 60.00,
        quantity: 3,
        totalPrice: 180.00,
        image: require('../img/xpg.png'),
        category: "Accessories",
        type: "Gaming Mouse",
        sale: 8
      },
      {
        productId: 25,
        productName: "LG UltraGear 27GN950-B",
        productPrice: 1500.00,
        quantity: 1,
        totalPrice: 1500.00,
        image: require('../img/asus motherboard.png'),
        category: "Monitor",
        type: "4K Gaming Monitor",
        sale: 10
      }
    ],
    totalItems: 4,
    cartTotalPrice: 1680.00,
    customer: {
      id: 110,
      name: "Liam Garcia",
      email: "liam.garcia@example.com",
      phone: "555-321-0987",
      address: {
        street: "789 Oak St",
        city: "San Francisco",
        country: "USA"
      }
    },
    payment: "Credit Card",
    shipping: {
      method: "Express",
      cost: 10.00
    },
    orderStatus: "Delivered",
    orderDate: "2024-06-10T10:00:00Z",
    notes: "Fragile items inside. Handle with care."
  },
  {
    id: 11,
    cart: [
      {
        productId: 26,
        productName: "AMD Ryzen 7 5800X",
        productPrice: 400.00,
        quantity: 1,
        totalPrice: 400.00,
        image: require('../img/xpg.png'),
        category: "Hardware",
        type: "Processor",
        sale: 15
      },
      {
        productId: 28,
        productName: "Corsair K95 RGB Platinum XT",
        productPrice: 180.00,
        quantity: 1,
        totalPrice: 180.00,
        image: require('../img/asus motherboard.png'),
        category: "Accessories",
        type: "Mechanical Keyboard",
        sale: 0
      }
    ],
    totalItems: 2,
    cartTotalPrice: 580.00,
    customer: {
      id: 111,
      name: "Olivia Brown",
      email: "olivia.brown@example.com",
      phone: "321-987-6543",
      address: {
        street: "333 Pine St",
        city: "Seattle",
        country: "USA"
      }
    },
    payment: "PayPal",
    shipping: {
      method: "Standard",
      cost: 5.00
    },
    orderStatus: "Processing",
    orderDate: "2024-06-11T10:00:00Z",
    notes: "Leave package with reception if not at home."
  },
  {
    id: 12,
    cart: [
      {
        productId: 29,
        productName: "Western Digital WD_BLACK 1TB",
        productPrice: 120.00,
        quantity: 2,
        totalPrice: 240.00,
        image: require('../img/xpg.png'),
        category: "Hardware",
        type: "NVMe SSD",
        sale: 5
      },
      {
        productId: 31,
        productName: "Sony WH-1000XM4",
        productPrice: 280.00,
        quantity: 1,
        totalPrice: 280.00,
        image: require('../img/asus motherboard.png'),
        category: "Accessories",
        type: "Noise-Canceling Headphones",
        sale: 12
      }
    ],
    totalItems: 3,
    cartTotalPrice: 520.00,
    customer: {
      id: 112,
      name: "Noah Martinez",
      email: "noah.martinez@example.com",
      phone: "555-123-4567",
      address: {
        street: "111 Maple Ave",
        city: "Toronto",
        country: "Canada"
      }
    },
    payment: "Debit Card",
    shipping: {
      method: "Standard",
      cost: 7.00
    },
    orderStatus: "Delivered",
    orderDate: "2024-06-12T10:00:00Z",
    notes: "Signature required upon delivery."
  },
  {
    id: 13,
    cart: [
      {
        productId: 32,
        productName: "NZXT H510",
        productPrice: 70.00,
        quantity: 1,
        totalPrice: 70.00,
        image: require('../img/xpg.png'),
        category: "Hardware",
        type: "PC Case",
        sale: 8
      },
      {
        productId: 34,
        productName: "Samsung 870 QVO 2TB",
        productPrice: 180.00,
        quantity: 1,
        totalPrice: 180.00,
        image: require('../img/asus motherboard.png'),
        category: "Hardware",
        type: "SATA SSD",
        sale: 0
      }
    ],
    totalItems: 2,
    cartTotalPrice: 250.00,
    customer: {
      id: 113,
      name: "Isabella Johnson",
      email: "isabella.johnson@example.com",
      phone: "987-654-3210",
      address: {
        street: "789 Maple Ave",
        city: "Los Angeles",
        country: "USA"
      }
    },
    payment: "Credit Card",
    shipping: {
      method: "Standard",
      cost: 5.00
    },
    orderStatus: "Processing",
    orderDate: "2024-06-13T10:00:00Z",
    notes: "Handle with care. Fragile items inside."
  },
  {
    id: 14,
    cart: [
      {
        productId: 35,
        productName: "Logitech MX Master 3",
        productPrice: 100.00,
        quantity: 1,
        totalPrice: 100.00,
        image: require('../img/xpg.png'),
        category: "Accessories",
        type: "Wireless Mouse",
        sale: 10
      },
      {
        productId: 37,
        productName: "Razer DeathAdder V2",
        productPrice: 80.00,
        quantity: 2,
        totalPrice: 160.00,
        image: require('../img/asus motherboard.png'),
        category: "Accessories",
        type: "Gaming Mouse",
        sale: 15
      }
    ],
    totalItems: 3,
    cartTotalPrice: 260.00,
    customer: {
      id: 114,
      name: "Alexander Brown",
      email: "alexander.brown@example.com",
      phone: "555-321-9876",
      address: {
        street: "333 Elm St",
        city: "Seattle",
        country: "USA"
      }
    },
    payment: "PayPal",
    shipping: {
      method: "Express",
      cost: 10.00
    },
    orderStatus: "Delivered",
    orderDate: "2024-06-14T10:00:00Z",
    notes: "Signature required upon delivery."
  },
  {
    id: 15,
    cart: [
      {
        productId: 38,
        productName: "BenQ ZOWIE XL2546",
        productPrice: 400.00,
        quantity: 1,
        totalPrice: 400.00,
        image: require('../img/xpg.png'), 
        category: "Monitor",
        type: "240Hz Gaming Monitor",
        sale: 20
      },
      {
        productId: 40,
        productName: "SteelSeries Apex Pro TKL",
        productPrice: 180.00,
        quantity: 1,
        totalPrice: 180.00,
        image: require('../img/asus motherboard.png'),
        category: "Accessories",
        type: "Mechanical Keyboard",
        sale: 0
      }
    ],
    totalItems: 2,
    cartTotalPrice: 580.00,
    customer: {
      id: 115,
      name: "Mia Garcia",
      email: "mia.garcia@example.com",
      phone: "234-567-8901",
      address: {
        street: "555 Oak St",
        city: "Vancouver",
        country: "Canada"
      }
    },
    payment: "Debit Card",
    shipping: {
      method: "Standard",
      cost: 7.00
    },
    orderStatus: "Processing",
    orderDate: "2024-06-15T10:00:00Z",
    notes: "Handle with care. Fragile items inside."
  },
  {
    id: 16,
    cart: [
      {
        productId: 41,
        productName: "AMD Radeon RX 6900 XT",
        productPrice: 1200.00,
        quantity: 1,
        totalPrice: 1200.00,
        image: require('../img/xpg.png'),
        category: "Hardware",
        type: "Graphics Card",
        sale: 15
      },
      {
        productId: 43,
        productName: "Bose QuietComfort 45",
        productPrice: 350.00,
        quantity: 1,
        totalPrice: 350.00,
        image: require('../img/asus motherboard.png'),
        category: "Accessories",
        type: "Noise-Canceling Headphones",
        sale: 10
      }
    ],
    totalItems: 2,
    cartTotalPrice: 1550.00,
    customer: {
      id: 116,
      name: "Ethan Martinez",
      email: "ethan.martinez@example.com",
      phone: "321-098-7654",
      address: {
        street: "789 Pine St",
        city: "Toronto",
        country: "Canada"
      }
    },
    payment: "Credit Card",
    shipping: {
      method: "Express",
      cost: 10.00
    },
    orderStatus: "Delivered",
    orderDate: "2024-06-16T10:00:00Z",
    notes: "Signature required upon delivery."
  },
  {
    id: 17,
    cart: [
      {
        productId: 44,
        productName: "NZXT Kraken X73",
        productPrice: 180.00,
        quantity: 1,
        totalPrice: 180.00,
        image: require('../img/xpg.png'),
        category: "Hardware",
        type: "Liquid Cooler",
        sale: 0
      },
      {
        productId: 46,
        productName: "Logitech G Pro X Superlight",
        productPrice: 150.00,
        quantity: 1,
        totalPrice: 150.00,
        image: require('../img/asus motherboard.png'),
        category: "Accessories",
        type: "Gaming Mouse",
        sale: 8
      }
    ],
    totalItems: 2,
    cartTotalPrice: 330.00,
    customer: {
      id: 117,
      name: "Charlotte Wilson",
      email: "charlotte.wilson@example.com",
      phone: "555-987-6543",
      address: {
        street: "555 Elm St",
        city: "Los Angeles",
        country: "USA"
      }
    },
    payment: "Credit Card",
    shipping: {
      method: "Standard",
      cost: 5.00
    },
    orderStatus: "Processing",
    orderDate: "2024-06-17T10:00:00Z",
    notes: "Handle with care. Fragile items inside."
  },
  {
    id: 18,
    cart: [
      {
        productId: 47,
        productName: "Sony PlayStation 5",
        productPrice: 500.00,
        quantity: 1,
        totalPrice: 500.00,
        image: require('../img/xpg.png'),
        category: "Other",
        type: "Gaming Console",
        sale: 10
      },
      {
        productId: 49,
        productName: "Samsung T7 Portable SSD",
        productPrice: 120.00,
        quantity: 1,
        totalPrice: 120.00,
        image: require('../img/asus motherboard.png'),
        category: "Hardware",
        type: "Portable SSD",
        sale: 5
      }
    ],
    totalItems: 2,
    cartTotalPrice: 570.00,
    customer: {
      id: 118,
      name: "Amelia Thompson",
      email: "amelia.thompson@example.com",
      phone: "456-789-0123",
      address: {
        street: "111 Pine St",
        city: "Seattle",
        country: "USA"
      }
    },
    payment: "PayPal",
    shipping: {
      method: "Express",
      cost: 10.00
    },
    orderStatus: "Delivered",
    orderDate: "2024-06-18T10:00:00Z",
    notes: "Signature required upon delivery."
  },
]
