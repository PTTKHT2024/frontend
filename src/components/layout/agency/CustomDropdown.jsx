import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const CustomDropdown = ({
  options,
  selectedOption,
  onSelectOption,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleOptionClick = (option) => {
    onSelectOption(option.name);
    setIsOpen(false);
    setSearch('');
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block w-64" ref={dropdownRef}>
      <div
        className="border p-2 bg-white cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{selectedOption || placeholder}</div>
        <div
          className="ml-2"
          style={{
            width: '16px',
            height: '16px',
            backgroundImage: `url('/imgs/icon-arrow.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
      </div>
      {isOpen && (
        <div className="absolute w-full border bg-white z-10 max-h-[200px] overflow-y-auto mt-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 border"
            placeholder="Tìm kiếm..."
          />
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

CustomDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedOption: PropTypes.string.isRequired,
  onSelectOption: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default CustomDropdown;
