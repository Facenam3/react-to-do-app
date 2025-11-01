export default function Button({ children }) {
    return (
        <div>
            <button type="submit" className="px-4 py-2 rounded-sm bg-purple-600 text-gray-100 shadow-xl cursor-pointer border-stone-400 border-2 hover:bg-purple-900 text">{children}</button>
        </div>
        
    );
}