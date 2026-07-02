import React from "react";
import TextFields from "./textFields";
import DatePicker from "./DatePicker";
import SelectField from "./SelectField";
import City from "./City";
import Url from "./Url";
import RadioGroup from "./RadioGroup";
import ColorPicker from "./ColorPicker";
import CheckBox from "./CheckBox";
import FileUpload from "./fileUpload";
import TextArea from "./textArea";
import Terms from "./terms";

const Inputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextFields />
        <DatePicker />
        <SelectField />
        <City />
        <Url />
        <RadioGroup />
        <ColorPicker/>
        <CheckBox/>
        <FileUpload/>
        <TextArea/>
      </div>

    <Terms/>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-xl shadow-[0_4px_20px_rgba(79,70,229,0.35)] transition transform active:scale-[0.98] text-sm mt-4"
      >
        Get Started
      </button>
    </form>
  );
};

export default Inputs;

