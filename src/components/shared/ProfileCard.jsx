import { ClickAwayListener } from "react-advanced-click-away";
import shop from "../../assets/shop.jpg";
import { Link } from "react-router-dom";

export default function ProfileCard({ closeModal }) {
  function handleClickAway() {
    // console.log("clicked outside!")
    // console.log(closeModal)
    closeModal();
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

                <div className="text-start py-0">
                  <Link
                    className="text-[10px] text-black italic hover:underline hover:text-indigo-600 font-medium"
                    to={"/visitStore"}
                  >
                    View more
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
