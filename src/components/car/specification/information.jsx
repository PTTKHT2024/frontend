import React from "react";

const Information = () => {
    return (
        <>
            <div className="block">
                <div className="flex justify-between font-bold items-center cursor-pointer py-6 px-0 my-0 mx-8 ml-14 border border-solid border-1px border-gray-400">
                  <h3 className="block text-base ml-0 mr-0 font-bold mb-2 leading-[1.2]">
                    Số chỗ
                  </h3>
                </div>
                <div className="flex flex-wrap justify-end my-0 mx-8 ml-14 border-b border-solid border-1px border-gray-300">
                  <table className="border border-solid border-1px border-gray-200 w-full mb-4 text-black border-collapse">
                    <tbody>
                      <tr>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          Số chỗ
                        </td>
                        <td className="w-[50%] border border-solid border-1px border-gray-400 p-3 align-top">
                          8
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
        </>
    )
}

export default Information;