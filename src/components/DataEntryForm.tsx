
import React, { useState } from 'react';
import { Check, X, Upload, Mic } from 'lucide-react';
import { toast } from "sonner";

const rpmOptions = [500, 1500, 3000, 4500];

interface AudioFile {
  rpm: number;
  file: File | null;
  dbValue: string;
}

const DataEntryForm = () => {
  const [formData, setFormData] = useState({
    motorNumber: '',
    driveShaftNumber: '',
    driveGearNumber: '',
    drivenGearNumber: '',
    vehicleSerialNumber: '',
    vinNumber: '',
    status: 'Good',
    remarks: '',
  });

  const [audioFiles, setAudioFiles] = useState<AudioFile[]>(
    rpmOptions.map(rpm => ({ rpm, file: null, dbValue: '' }))
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAudioUpload = (rpm: number, file: File | null) => {
    setAudioFiles(prev => 
      prev.map(item => 
        item.rpm === rpm ? { ...item, file } : item
      )
    );
    if (file) {
      toast(`Audio file for ${rpm} RPM uploaded successfully`);
    }
  };

  const handleDbValueChange = (rpm: number, value: string) => {
    setAudioFiles(prev => 
      prev.map(item => 
        item.rpm === rpm ? { ...item, dbValue: value } : item
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Audio Files:", audioFiles);
    toast.success("Data submitted successfully!");
    
    // Reset form after submission
    setFormData({
      motorNumber: '',
      driveShaftNumber: '',
      driveGearNumber: '',
      drivenGearNumber: '',
      vehicleSerialNumber: '',
      vinNumber: '',
      status: 'Good',
      remarks: '',
    });
    
    setAudioFiles(rpmOptions.map(rpm => ({ rpm, file: null, dbValue: '' })));
  };

  const isComplete = () => {
    const requiredFields = ['motorNumber', 'driveGearNumber', 'drivenGearNumber', 'vehicleSerialNumber'];
    const hasRequiredFields = requiredFields.every(field => formData[field as keyof typeof formData]);
    
    // Check if at least one audio file is uploaded
    const hasAudioFile = audioFiles.some(audio => audio.file !== null);
    
    return hasRequiredFields && hasAudioFile;
  };

  return (
    <form onSubmit={handleSubmit} className="industrial-card p-6 animate-fade-in">
      <h2 className="text-xl font-bold text-industrial-blue mb-6">Motor & Gear Assembly Data</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="label-text">Motor Number*</label>
          <input
            type="text"
            name="motorNumber"
            value={formData.motorNumber}
            onChange={handleInputChange}
            className="input-field w-full"
            required
          />
        </div>
        
        <div>
          <label className="label-text">Drive Shaft Number</label>
          <input
            type="text"
            name="driveShaftNumber"
            value={formData.driveShaftNumber}
            onChange={handleInputChange}
            className="input-field w-full"
          />
        </div>
        
        <div>
          <label className="label-text">Drive Gear Number*</label>
          <input
            type="text"
            name="driveGearNumber"
            value={formData.driveGearNumber}
            onChange={handleInputChange}
            className="input-field w-full"
            required
          />
        </div>
        
        <div>
          <label className="label-text">Driven Gear Number*</label>
          <input
            type="text"
            name="drivenGearNumber"
            value={formData.drivenGearNumber}
            onChange={handleInputChange}
            className="input-field w-full"
            required
          />
        </div>
        
        <div>
          <label className="label-text">Vehicle Serial Number*</label>
          <input
            type="text"
            name="vehicleSerialNumber"
            value={formData.vehicleSerialNumber}
            onChange={handleInputChange}
            className="input-field w-full"
            required
          />
        </div>
        
        <div>
          <label className="label-text">VIN Number</label>
          <input
            type="text"
            name="vinNumber"
            value={formData.vinNumber}
            onChange={handleInputChange}
            className="input-field w-full"
          />
        </div>
        
        <div>
          <label className="label-text">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="input-field w-full"
          >
            <option value="Good">Good</option>
            <option value="Not Good">Not Good</option>
          </select>
        </div>
        
        <div>
          <label className="label-text">Remarks</label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleInputChange}
            className="input-field w-full resize-none h-[42px]"
          />
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-industrial-blue mb-4">Audio Recordings & dB Values</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {audioFiles.map((audio) => (
          <div key={audio.rpm} className="flex flex-col p-4 border rounded-md bg-industrial-light/30">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-industrial-gray">{audio.rpm} RPM</span>
              <div className="flex items-center">
                {audio.file ? (
                  <span className="text-xs bg-industrial-success text-white px-2 py-1 rounded flex items-center">
                    <Check size={12} className="mr-1" /> Uploaded
                  </span>
                ) : (
                  <span className="text-xs bg-industrial-gray text-white px-2 py-1 rounded flex items-center">
                    <X size={12} className="mr-1" /> Not Uploaded
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex items-center mb-3">
              <label className="flex-1 flex items-center px-3 py-2 bg-white border border-industrial-light rounded-md cursor-pointer hover:bg-industrial-light/20 transition-colors">
                <input
                  type="file"
                  accept="audio/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    handleAudioUpload(audio.rpm, file);
                  }}
                />
                <Upload size={18} className="mr-2 text-industrial-accent" />
                <span className="text-sm text-industrial-gray">
                  {audio.file ? audio.file.name : "Upload Audio File"}
                </span>
              </label>
              <button
                type="button"
                className="ml-2 p-2 bg-industrial-accent text-white rounded-md hover:bg-opacity-90 transition-colors"
                onClick={() => {
                  // This would trigger the actual recording functionality
                  // For now, just showing a toast
                  toast.info(`Recording for ${audio.rpm} RPM would start here`);
                }}
              >
                <Mic size={18} />
              </button>
            </div>
            
            <div>
              <label className="label-text">dB Value</label>
              <input
                type="text"
                value={audio.dbValue}
                onChange={(e) => handleDbValueChange(audio.rpm, e.target.value)}
                className="input-field w-full"
                placeholder="Enter dB value"
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!isComplete()}
          className={`px-6 py-3 rounded-md text-white font-medium ${
            isComplete()
              ? "bg-industrial-blue hover:bg-opacity-90"
              : "bg-industrial-gray/50 cursor-not-allowed"
          } transition-colors`}
        >
          Submit Data
        </button>
      </div>
    </form>
  );
};

export default DataEntryForm;
