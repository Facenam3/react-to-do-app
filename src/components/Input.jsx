export default function Input({ ref, ...props }) {
    return (
        <div>
            <input 
            {...props} 
            className="w-full px-4 py-2 rounded-md focus-none border-2 border-stone-500" 
            ref={ref}
            type="text"
            />
        </div>
    );
}