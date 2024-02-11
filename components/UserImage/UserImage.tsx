export default function UserImage() {
    return (
        <div className="flex flex-col justify-center items-center">

            <img
                className="w-20 h-20 rounded-full"
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="user"
            />
            <p>Change Photos</p>
            <div>
                <button className="mr-5">update</button>
                <button>Remove</button>
            </div>

        </div>
    )
}