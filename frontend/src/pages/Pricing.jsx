import React, { useState } from "react";

const Pricing = () => {
  const [selectedField, setSelectedField] = useState("");
  const [filteredFields, setFilteredFields] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [domainName, setDomainName] = useState("");
  const [additionalFunctions, setAdditionalFunctions] = useState([]);
  const [selectedServer, setSelectedServer] = useState("");
  const [finalPrice, setFinalPrice] = useState("Final Price Display");

  const fieldOptions = ["Education", "Food", "Clothing Store", "Healthcare", "Technology"];

  const handleFieldInput = (value) => {
    setSelectedField(value);
    if (value) {
      setFilteredFields(fieldOptions.filter((field) => field.toLowerCase().includes(value.toLowerCase())));
    } else {
      setFilteredFields([]);
    }
  };

  const types = [
    { name: "Dynamic", img: "https://gashwatechnologies.com/images/dynamic_web_designing_himachal_shimla.gif" },
    { name: "Static", img: "https://www.slnsoftwares.com/images/gif/webdesign17.gif" },
    { name: "Bootstrap", img: "https://embedpress.com/wp-content/uploads/2022/06/How-To-Embed-Interactive-Gif-On-WordPress-Site-Without-Coding-1.gif" },
    { name: "WordPress", img: "https://templatesjungle.com/wp-content/uploads/edd/2023/05/freebies-cover.jpg" },
  ];

  const additionalOptions = ["Payment Gateway", "Chat", "Social Login", "Maps", "Translation"];

  const serverOptions = [
    { label: "50 person", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhq73M0ZkIqt2zI66rqrD2f1EzyTcNbVH9lw&s" },
    { label: "500 person", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzqezBj_ZXlGKwBQzQaX2_5nRdVvMDp_LVA&s" },
    { label: "5000 person", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzqezBj_ZXlGKwBQzQaX2_5nRdVvMDp_LVA&s" },
    { label: "500000 person", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMn2Jm1kG_suxnjHSafYogbXgb9bTWFZ1pg&s" },
  ];

  const handleFunctionSelect = (option) => {
    if (additionalFunctions.includes(option)) {
      setAdditionalFunctions(additionalFunctions.filter((item) => item !== option));
    } else {
      setAdditionalFunctions([...additionalFunctions, option]);
    }
  };

  const calculatePrice = () => {
    if (selectedServer === "50 person") setFinalPrice("$50");
    else if (selectedServer === "500 person") setFinalPrice("$500");
    else if (selectedServer === "5000 person") setFinalPrice("$5000");
    else if (selectedServer === "500000 person") setFinalPrice("$50000");
    else setFinalPrice("Final Price Display");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Content Section */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left Image Section */}
     <div className="hidden md:block w-2/5">
  <img
    src="https://www.shutterstock.com/image-illustration/detailed-view-cuttingedge-data-center-600nw-2439540211.jpg"
    alt="Server"
    className="w-full object-cover"
    style={{ height: '100vh', minHeight: '600px' }} // Static height with a minimum value
  />
</div>


        {/* Right Form Section */}
        <div className="w-full md:w-3/5 p-8 flex flex-col">
          <h1 className="text-3xl font-bold mb-6">Create Your Website</h1>

          {/* Field Selection */}
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Field of Website</label>
            <input
              type="text"
              value={selectedField}
              onChange={(e) => handleFieldInput(e.target.value)}
              placeholder="Type to search..."
              className="w-full border border-gray-300 p-2 rounded"
            />
            {filteredFields.length > 0 && (
              <ul className="border border-gray-300 mt-2 rounded bg-white">
                {filteredFields.map((field) => (
                  <li
                    key={field}
                    onClick={() => {
                      setSelectedField(field);
                      setFilteredFields([]);
                    }}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                  >
                    {field}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Type Selection */}
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Type of Website</label>
            <div className="flex gap-4 overflow-x-auto">
              {types.map((type) => (
                <div
                  key={type.name}
                  className={`flex-shrink-0 w-32 h-32 p-2 border rounded text-center cursor-pointer ${
                    selectedType === type.name ? "border-orange-500" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedType(type.name)}
                >
                  <img src={type.img} alt={type.name} className="mx-auto mb-1 h-16" />
                  <span className="text-sm">{type.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Domain Selection */}
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Choose Your Domain</label>
            <div className="flex">
              <input
                type="text"
                placeholder="Your Domain"
                value={domainName}
                onChange={(e) => setDomainName(e.target.value)}
                className="flex-1 border border-gray-300 p-2 rounded-l"
              />
              <select className="border border-gray-300 rounded-r p-2">
                <option value=".com">.com</option>
                <option value=".net">.net</option>
                <option value=".org">.org</option>
              </select>
            </div>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded">
              Get Price
            </button>
          </div>

          {/* Additional Functions */}
          <div className="mb-6">
            <label className="block text-lg font-medium mb-4">Additional Functions</label>
            <div className="grid grid-cols-2 gap-4">
              {additionalOptions.map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={additionalFunctions.includes(option)}
                    onChange={() => handleFunctionSelect(option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Server Required Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Server Required</h2>
            <p className="text-gray-600 mb-4">Select max load required (per day)</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {serverOptions.map((option) => (
                <div
                  key={option.label}
                  className={`p-4 border rounded text-center cursor-pointer ${
                    selectedServer === option.label ? "border-orange-500" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedServer(option.label)}
                >
                  <img src={option.img} alt={option.label} className="mx-auto mb-2" />
                  <span>{option.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dividing Line */}
          <div className="border-t-4 border-orange-500 my-8"></div>
        </div>
      </div>

      {/* Final Price Section */}
      <div className="bg-orange-50 p-10 md:p-20 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">FINAL PRICE</h2>
        <div className="flex items-center justify-between w-full max-w-lg">
          <div className="border border-gray-300 px-6 py-4 rounded text-2xl flex-grow mr-4 text-center">
            {finalPrice}
          </div>
          <button
            onClick={calculatePrice}
            className="px-6 py-3 bg-orange-500 text-white rounded text-lg"
          >
            Make Ease
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
