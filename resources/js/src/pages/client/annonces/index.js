import { TextField } from "@mui/material";

const AddAnnonces = () => {
    return (
        <>
            {/*div pour centrer*/}

            <div className="min-h-full flex items-center justify-center py-2 px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-md w-full">
                    <div className="bg-white px-4 sm:px-6 lg:px-8">
                        <form class="w-full max-w-lg">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <TextField
                                    fullWidth
                                    label="title"
                                    id="fullWidth"
                                />
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="flex justify-center">
                                <div class="flex justify-center">
                                <div class="flex justify-center">
                                <div class="flex justify-center">
  <div class="mb-3 w-96">
    <label for="formFile" class="form-label inline-block mb-2 text-gray-700">Default file input example</label>
    <input class="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" />
  </div>
</div>
</div>
</div>


                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Description"
                                    multiline
                                    rows={5}
                                    fullWidth
                                />
                            </div>
                            <div class="md:flex md:items-center">
                                <div class="md:w-1/3">
                                    <button
                                        type="button"
                                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Retour
                                    </button>
                                </div>
                                <div class="md:w-2/3"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddAnnonces;
