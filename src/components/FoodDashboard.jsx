import burger from "../burger.jpg";
import lettuce from "../lettuce_cups.jpg";
import mafalda from "../mafalda.jpg";
import chicken from "../Sheet-Pan-Cheesy-Jalapeno-Chicken.jpeg";
import rice from "../Quinoa & Vegetable rice.jpg";
import steaks from "../premium-steak.jpg";
import orzo from "../ready-to-cook.jpg";
import parmesan from "../prepped-and-ready-tile.jpg";
import sandwiches from "../breakfast.jpg";
import cake from "../desserts.jpg";

export function FoodDashboard(){
    return (
        <section className="p-10">
            <h1 className="text-blue-900 font-bold text-4xl py-5 tracking-widest">CHOOSE FROM</h1>
            <p className="text-blue-400 font-bold text-4xl pb-10 tracking-widest">80+ weekly options</p>
            <div className="grid grid-cols-5 gap-4">
                 <div>
                    <img className="w-64 h-56" src={burger} alt="burger" />
                    <p className="text-blue-900 text-sm font-medium pt-5 tracking-wider">CRAFT</p>
                    <p className="text-gray-500 font-medium py-3 ">Cheese Crisp Burgers</p>
                 </div>
                 <div >
                    <img className="w-64 h-56" src={lettuce} alt="burger" />
                    <p className="text-blue-900 text-sm font-medium pt-5 tracking-wider">WELLNESS</p>
                    <p className="text-gray-500 font-medium py-3 ">Turkey & Mushroom Lettuce Cups</p>
                 </div>
                 <div >
                    <img className="w-64 h-56" src={mafalda} alt="burger" />
                    <p className="text-blue-900 text-sm font-medium pt-5 tracking-wider">FAMILY FRIENDLY</p>
                    <p className="text-gray-500 font-medium py-3 ">Mafalda Pasta</p>
                 </div>
                 <div>
                    <img className="w-64 h-56" src={chicken} alt="burger" />
                    <p className="text-blue-900 text-sm font-medium pt-5 tracking-wider">FAST & EASY</p>
                    <p className="text-gray-500 font-medium py-3 ">Sheet Pan Cheesy Jalapeño Chicken</p>
                 </div>
                 <div>
                    <img className="w-64 h-56" src={rice} alt="burger" />
                    <p className="text-blue-900 text-sm font-medium pt-5 tracking-wider">VEGETARIAN</p>
                    <p className="text-gray-500 font-medium py-3 ">Quinoa & Vegetable “Fried Rice”</p>
                 </div>
                 <div>
                    <img className="w-64 h-56" src={steaks} alt="burger" />
                    <p className="text-blue-900 text-sm font-medium pt-5 tracking-wider">PREMIUM</p>
                    <p className="text-gray-500 font-medium py-3 ">NY Strip Steaks & Herb-Mushroom Pan Sauce</p>
                 </div>
                 <div>
                    <img className="w-64 h-56" src={orzo} alt="burger" />
                    <p className="text-blue-900 text-sm font-medium pt-5 tracking-wider">READY TO COOK</p>
                    <p className="text-gray-500 font-medium py-3 ">Pesto Chicken and Orzo</p>
                 </div>
                 <div>
                    <img className="w-64 h-56" src={parmesan} alt="burger" />
                    <p className="text-blue-900 text-sm font-medium pt-5 tracking-wider">PREPARED & READY</p>
                    <p className="text-gray-500 font-medium py-3 ">Chicken Parmesan</p>
                 </div>
                 <div>
                    <img className="w-64 h-56" src={sandwiches} alt="burger" />
                    <p className="text-blue-900 text-sm font-medium pt-5 tracking-wider">BREAKFAST</p>
                    <p className="text-gray-500 font-medium py-3 ">Fried Egg & Prosciutto Sandwiches</p>
                 </div>
                 <div>
                    <img className="w-64 h-56" src={cake} alt="burger" />
                    <p className="text-blue-900 text-sm font-medium pt-5 tracking-wider">DESSERTS</p>
                    <p className="text-gray-500 font-medium py-3 ">Flourless Chocolate Cake</p>
                 </div>
            </div>
        </section>
    )
}