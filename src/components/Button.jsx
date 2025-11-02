export default function Button({ children, ...props }) {
    return (
        <div>
            <button 
                {...props} 
                type="submit" 
                className="px-4 py-2 rounded-sm bg-stone-400 text-gray-100 shadow-xl cursor-pointer border-stone-400 border-2 hover:bg-stone-800 hover:text-gray-50"
                >{children}</button>
        </div>
        
    );
}