import SideBar from "@/components/sidebar/SideBar"

const   SecondLayout = ( {children}) => {
  return (
    <div className="flex">
        <div className="w-1/4 bg-white p-8 h-screen">
            <SideBar />
        </div>
        <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
export default SecondLayout