export function Navigation()
{
    return(
        <nav className="p-2">
            <div className="flex justify-between px-24 text-blue-600">
            <div className="flex gap-10 items-center">
                <div className="font-black text-3xl"><p>Blue</p><p>apron</p></div>
                <p>Plans</p>
                <p>On The Menu</p>
                <p>Market</p>
                <p>Gift Cards</p>
                <p>Blog</p>
            </div>
            <div className="flex gap-8">
                <button className="px-3 py-2 text-white bg-orange-400 ml-80 self-center" >Log In</button>
                <button>Sign Up</button>
            </div>
            </div>
        </nav>
    )
}