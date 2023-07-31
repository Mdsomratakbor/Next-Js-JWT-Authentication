import Link from "next/link"
import SigninButton from "./SigninButton";


const AppBar = ()=>{
    return(
        <header className="text-gray-700 flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
        <Link className="transition-colors hover:text-blue-500" href={"/"}>
          Home Page
        </Link>
        <Link className="transition-colors hover:text-blue-500" href={"/UserPost"}>
          User Post Page
        </Link>
        <Link className="transition-colors hover:text-blue-500" href={"/UserInfo"}>
          User Info Page
        </Link>
        <SigninButton />
      </header>
    )
}

export default AppBar;