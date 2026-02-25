import { createContext, useState } from "react";

export const MedicineContext = createContext();

export const MedicineProvider = ({ children }) => {
  const medicine = [
    {
      id: 1,
      name: "Medicine 1",
      price: 20,
      isNew: true,
      category: "new arrivals",
      img: "/catogoriesimg/medicine1.jpg",
    },
    {
      id: 2,
      name: "Medicine 2",
      price: 21.5,
      isNew: false,
      category: "hot product",
      img: "/catogoriesimg/medicine2.jpg",
    },
    {
      id: 3,
      name: "Medicine 3",
      price: 23,
      isNew: false,
      category: "sell product",
      img: "/catogoriesimg/medicine3.jpg",
    },
    {
      id: 4,
      name: "Medicine 4",
      price: 24.5,
      isNew: false,
      category: "new arrivals",
      img: "/catogoriesimg/medicine4.jpg",
    },
    {
      id: 5,
      name: "Medicine 5",
      price: 26,
      isNew: false,
      category: "hot product",
      img: "/catogoriesimg/medicine5.jpg",
    },
    {
      id: 6,
      name: "Medicine 6",
      price: 27.5,
      isNew: true,
      category: "sell product",
      img: "/catogoriesimg/medicine6.jpg",
    },
    {
      id: 7,
      name: "Medicine 7",
      price: 29,
      isNew: false,
      category: "new arrivals",
      img: "/catogoriesimg/medicine7.jpg",
    },
    {
      id: 8,
      name: "Medicine 8",
      price: 30.5,
      isNew: false,
      category: "hot product",
      img: "/catogoriesimg/medicine8.jpg",
    },
    {
      id: 9,
      name: "Medicine 9",
      price: 32,
      isNew: false,
      category: "sell product",
      img: "/catogoriesimg/medicine9.jpg",
    },
    {
      id: 10,
      name: "Medicine 10",
      price: 33.5,
      isNew: true,
      category: "new arrivals",
      img: "/catogoriesimg/medicine10.jpg",
    },
    {
      id: 11,
      name: "Medicine 11",
      price: 35,
      isNew: false,
      category: "hot product",
      img: "/catogoriesimg/medicine11.jpg",
    },
    {
      id: 12,
      name: "Medicine 12",
      price: 36.5,
      isNew: false,
      category: "sell product",
      img: "/catogoriesimg/medicine12.jpg",
    },
    {
      id: 13,
      name: "Medicine 13",
      price: 38,
      isNew: false,
      category: "new arrivals",
      img: "/catogoriesimg/medicine13.jpg",
    },
    {
      id: 14,
      name: "Medicine 14",
      price: 39.5,
      isNew: false,
      category: "hot product",
      img: "/catogoriesimg/medicine14.jpg",
    },
    {
      id: 15,
      name: "Medicine 15",
      price: 41,
      isNew: true,
      category: "sell product",
      img: "/catogoriesimg/medicine15.jpg",
    },
    {
      id: 16,
      name: "Medicine 16",
      price: 42.5,
      isNew: false,
      category: "new arrivals",
      img: "/catogoriesimg/medicine16.jpg",
    },
    {
      id: 17,
      name: "Medicine 17",
      price: 44,
      isNew: false,
      category: "hot product",
      img: "/catogoriesimg/medicine17.jpg",
    },
    {
      id: 18,
      name: "Medicine 18",
      price: 45.5,
      isNew: false,
      category: "sell product",
      img: "/catogoriesimg/medicine18.jpg",
    },
    {
      id: 19,
      name: "Medicine 19",
      price: 47,
      isNew: false,
      category: "new arrivals",
      img: "/catogoriesimg/medicine19.jpg",
    },
    {
      id: 20,
      name: "Medicine 20",
      price: 48.5,
      isNew: true,
      category: "hot product",
      img: "/catogoriesimg/medicine20.jpg",
    },
    {
      id: 21,
      name: "Medicine 21",
      price: 50,
      isNew: false,
      category: "sell product",
      img: "/catogoriesimg/medicine21.jpg",
    },
    {
      id: 22,
      name: "Medicine 22",
      price: 51.5,
      isNew: false,
      category: "new arrivals",
      img: "/catogoriesimg/medicine22.jpg",
    },
    {
      id: 23,
      name: "Medicine 23",
      price: 53,
      isNew: false,
      category: "hot product",
      img: "/catogoriesimg/medicine23.jpg",
    },
    {
      id: 24,
      name: "Medicine 24",
      price: 54.5,
      isNew: false,
      category: "sell product",
      img: "/catogoriesimg/medicine24.jpg",
    },
    {
      id: 25,
      name: "Medicine 25",
      price: 56,
      isNew: true,
      category: "new arrivals",
      img: "/catogoriesimg/medicine25.jpg",
    },
    {
      id: 26,
      name: "Medicine 26",
      price: 57.5,
      isNew: false,
      category: "hot product",
      img: "/catogoriesimg/medicine26.jpg",
    },
    {
      id: 27,
      name: "Medicine 27",
      price: 59,
      isNew: false,
      category: "sell product",
      img: "/catogoriesimg/medicine27.jpg",
    },
  ];

  const mostview = [
    {
      id: 1,
      name: "Nam mollis porta facilisis.",
      price: "$58.56",
      img: "featureimgs/medicine1.jpg",
    },
    {
      id: 2,
      name: "Aliquam tincidunt mau",
      price: "$48.55",
      img: "featureimgs/medicine2.jpg",
    },
    {
      id: 3,
      name: "Fusce porttitor augue",
      price: "$59.48",
      img: "featureimgs/medicine3.jpg",
    },
    {
      id: 4,
      name: "Integer cursus auctor",
      price: "$60.00",
      img: "featureimgs/medicine4.jpg",
    },
    {
      id: 5,
      name: "Quisque at orci gravida",
      price: "$45.49",
      img: "featureimgs/medicine5.jpg",
    },
    {
      id: 6,
      name: "Aollis porta facilisis.",
      price: "$53.67",
      img: "featureimgs/medicine6.jpg",
    },

    {
      id: 7,
      name: "Lorem ipsum dolor",
      price: "$42.20",
      img: "featureimgs/medicine7.jpg",
    },
    {
      id: 8,
      name: "Sed ut perspiciatis",
      price: "$55.10",
      img: "featureimgs/medicine8.jpg",
    },
    {
      id: 9,
      name: "At vero eos et accusam",
      price: "$47.80",
      img: "featureimgs/medicine9.jpg",
    },
    {
      id: 10,
      name: "Duis aute irure dolor",
      price: "$61.25",
      img: "featureimgs/medicine10.jpg",
    },
    {
      id: 11,
      name: "Excepteur sint occaecat",
      price: "$49.90",
      img: "featureimgs/medicine11.jpg",
    },
    {
      id: 12,
      name: "Nemo enim ipsam",
      price: "$52.40",
      img: "featureimgs/medicine12.jpg",
    },
    {
      id: 13,
      name: "Temporibus autem quibusdam",
      price: "$57.75",
      img: "featureimgs/medicine13.jpg",
    },
  ];

  const toprating = [
    {
      id: 14,
      name: "Neque porro quisquam",
      price: "$54.30",
      img: "featureimgs/medicine14.jpg",
    },
    {
      id: 15,
      name: "Ut enim ad minima",
      price: "$46.85",
      img: "featureimgs/medicine15.jpg",
    },
    {
      id: 16,
      name: "Quis autem vel eum",
      price: "$59.99",
      img: "featureimgs/medicine16.jpg",
    },
    {
      id: 17,
      name: "Iusto odio dignissimos",
      price: "$62.40",
      img: "featureimgs/medicine17.jpg",
    },
    {
      id: 18,
      name: "Blanditiis praesentium",
      price: "$50.75",
      img: "featureimgs/medicine18.jpg",
    },
    {
      id: 19,
      name: "Voluptatum deleniti",
      price: "$44.60",
      img: "featureimgs/medicine19.jpg",
    },
    {
      id: 20,
      name: "Atque corrupti quos",
      price: "$57.10",
      img: "featureimgs/medicine20.jpg",
    },

    {
      id: 21,
      name: "Dolores et quas molestias",
      price: "$63.00",
      img: "featureimgs/medicine21.jpg",
    },
    {
      id: 22,
      name: "Excepturi sint occaecati",
      price: "$48.90",
      img: "featureimgs/medicine22.jpg",
    },
    {
      id: 23,
      name: "Cupiditate non provident",
      price: "$56.35",
      img: "featureimgs/medicine23.jpg",
    },
    {
      id: 24,
      name: "Similique sunt in culpa",
      price: "$52.80",
      img: "featureimgs/medicine24.jpg",
    },
    {
      id: 25,
      name: "Officia deserunt mollitia",
      price: "$45.95",
      img: "featureimgs/medicine25.jpg",
    },
    {
      id: 26,
      name: "Laborum et dolorum fuga",
      price: "$60.20",
      img: "featureimgs/medicine26.jpg",
    },
    {
      id: 27,
      name: "Et harum quidem rerum",
      price: "$58.40",
      img: "featureimgs/medicine27.jpg",
    },
  ];
  // 🔹 ADD THIS
  const [cart, setCart] = useState([]);

  // 🔹 ADD THIS
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <MedicineContext.Provider
      value={{
        medicine,
        mostview,
        toprating,
        cart,
        addToCart,
      }}
    >
      {children}
    </MedicineContext.Provider>
  );
};
