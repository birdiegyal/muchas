// import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { CardContent, Card, CardTitle, CardHeader } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// export default function ProfileForm() {
//   return (
//     <div className="min-h-screen mx-2.5 space-y-6 bg-background">
//       <Card className="max-w-2xl dark:bg-input boder-none mx-auto sm:max-w-lg md:max-w-lg">
//         <CardContent className="space-y-4 border-none">
//           <div className="flex items-center my-5">
//             <Avatar className="h-12 w-12 mr-4">
//               <AvatarImage alt="User avatar" src="/placeholder-avatar.jpg" />
//               <AvatarFallback>US</AvatarFallback>
//             </Avatar>
//             <div className="space-y-1">
//               <h2 className="text-2xl text-white font-bold">Username</h2>
//               <div className="text-sm text-gray-300 dark:text-gray-400">
//                 User123
//               </div>
//             </div>
//           </div>
//           <div className="space-y-2 text-white">
//             <Label htmlFor="email ">Email</Label>
//             <Input
//               disabled
//               id="email"
//               type="email"
//               value="user123@example.com"
//             />
//           </div>
//         </CardContent>
//       </Card>
//       <Card className="dark:bg-input">
//         <CardHeader>
//           <CardTitle className="text-xl text-white">
//             Last Searched Place
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <img
//             alt="Last searched place"
//             height="200"
//             src="/placeholder.svg"
//             style={{
//               aspectRatio: "400/200",
//               objectFit: "cover",
//             }}
//             width="400"
//           />
//         </CardContent>
//       </Card>
//       <Button className="w-full bg-primary text-[20px] font-bold   mt-2  hover:bg-input hover:text-white">
//         Show on Map
//       </Button>
//       <div className="text-center">
//         <Link className="text-blue-500 hover:underline" to="/editprofile">
//           Edit Profile
//         </Link>
//       </div>
//     </div>
//   );
// }

import { ClickAwayListener } from "react-advanced-click-away";
import shop from "../../assets/shop.jpg";
import { Link } from "react-router-dom";

export default function ProfileCard({ closeModal }) {
  function handleClickAway() {
    // console.log("clicked outside!")
    console.log(closeModal)
    closeModal()
  }
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="absolute bottom-2 rounded-md left-1/2 flex flex-col -translate-x-1/2  bg-transparent min-w-[97%] sm:min-w-[50%] backdrop-blur-3xl backdrop-brightness-90 popup">
        <div className="flex justify-between p-2">
          <p className="bg-[#ffcdb2] bg-opacity-20 border-[1px] border-[#ffcdb2] px-4 py-1 rounded-full text-[#ffcdb2]">
            address
          </p>
          <p className="bg-[#E5989B] bg-opacity-20 border-[1px] border-[#E5989B] px-4 py-1 rounded-full text-[#E5989B]">
            time
          </p>
        </div>
        <div className="flex-col">
          <div className="w-[100%]">
            <div className="flex  shadow-xl rounded-lg py-2">
              <div className="photo-wrapper p-2 ">
                <img
                  className="w-[100%] h-full mx-auto rounded"
                  src={shop}
                  alt="John Doe"
                />
              </div>
              <div className="p-2 bg-transparent  ">
                <h3 className=" text-lg text-gray-400  font-bold  leading-8">
                  <Link href="#" className="underline">
                    Adidas
                  </Link>
                </h3>
                <div className=" text-gray-400 text-[9px] font-semibold">
                  <p>Shoe Collections & Wardrobe</p>
                </div>
                <table className=" my-3">
                  <tbody>
                    <tr>
                      <td className="text-gray-400 text-[10px] font-semibold pr-2">
                        Address
                      </td>
                      <td className=" text-[10px]">
                        Chatakpur-3, Dhangadhi Kailali
                      </td>
                    </tr>
                    <tr>
                      <td className=" text-gray-400 text-[10px] font-semibold">
                        Phone
                      </td>
                      <td className="text-[10px]">+977 9955221114</td>
                    </tr>
                    <tr>
                      <td className=" text-gray-400 font-semibold pr-2 text-[10px]">
                        Email
                      </td>
                      <td className="text-[10px]">john@exmaple.com</td>
                    </tr>
                  </tbody>
                </table>

                <div className="text-center py-0">
                  <Link
                    className="text-[10px] text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    to={"/reviews"}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
    </ClickAwayListener>
  );
}
