// @ts-nocheck
import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface FormDataState {
  whatsapp: string;
  instagram: string;
  suggestion: string;
  images: any[];
}

interface CustomDesignModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}

export const CustomDesignModal: React.FC<CustomDesignModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<FormDataState>({
    whatsapp: '',
    instagram: '',
    suggestion: '',
    images: [],
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: any) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    // Manually create array from FileList
    const newFiles = [];
    for (let i = 0; i < files.length; i++) {
      newFiles[newFiles.length] = files[i];
    }
    
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...newFiles].slice(0, 5)
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = new FormData();
    
    form.append('whatsapp', formData.whatsapp);
    form.append('instagram', formData.instagram);
    form.append('suggestion', formData.suggestion);
    
    // Use a for loop instead of forEach
    for (let i = 0; i < formData.images.length; i++) {
      form.append(`images[${i}]`, formData.images[i]);
    }
    
    onSubmit(form);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-[9999]">
      <div className="fixed inset-0 bg-black/80 z-[9998]" onClick={onClose} />
      <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl p-8 w-full max-w-2xl z-[9999]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#ff00f7] hover:text-[#ff00f7]/80"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h2 className="font-['Orbitron'] text-2xl text-[#00d9ff] mb-6 text-center">
          Create Your Custom Design
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#00d9ff] mb-2">WhatsApp Number</label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder="Enter your WhatsApp number"
              className="w-full px-4 py-2 bg-[#1a1a40] rounded-lg border border-[#00d9ff]/30
                         text-[#00ffe7] focus:outline-none focus:border-[#00d9ff]"
            />
          </div>

          <div>
            <label className="block text-[#00d9ff] mb-2">Instagram ID</label>
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleInputChange}
              placeholder="Enter your Instagram ID"
              className="w-full px-4 py-2 bg-[#1a1a40] rounded-lg border border-[#00d9ff]/30
                         text-[#00ffe7] focus:outline-none focus:border-[#00d9ff]"
            />
          </div>

          <div>
            <label className="block text-[#00d9ff] mb-2">Upload Photos</label>
            <input
              type="file"
              name="images"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="w-full px-4 py-2 bg-[#1a1a40] rounded-lg border border-[#00d9ff]/30
                         text-[#00ffe7] focus:outline-none focus:border-[#00d9ff]"
            />
            <p className="text-sm text-[#00d9ff]/60 mt-1">
              {formData.images.length} / 5 photos selected
            </p>
          </div>

          <div>
            <label className="block text-[#00d9ff] mb-2">Suggestions</label>
            <textarea
              name="suggestion"
              value={formData.suggestion}
              onChange={handleInputChange}
              placeholder="Any specific suggestions for your design?"
              className="w-full px-4 py-2 bg-[#1a1a40] rounded-lg border border-[#00d9ff]/30
                         text-[#00ffe7] focus:outline-none focus:border-[#00d9ff] h-32 resize-none"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 bg-[#00d9ff] text-[#111128] font-['Orbitron']
                        rounded-full hover:bg-[#00ffe7] transition-colors duration-300"
            >
              Submit Design
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
