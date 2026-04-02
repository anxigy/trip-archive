"use client";

import { ImagePlusIcon } from "lucide-react";
import { useState, useRef, useCallback } from "react";

interface ImageUploaderProps {
  value: File | null;
  onChange: (file: File | null) => void;
}

export default function ImageUploader({ value, onChange }: ImageUploaderProps) {
  const [dragging, setDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) return;
      onChange(file);
      const url = URL.createObjectURL(file);
      setPreview(url);
    },
    [onChange]
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };
  const onDragLeave = () => setDragging(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(null);
    setPreview(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      className={`
        relative w-full rounded-2xl border-2 border-dashed cursor-pointer
        transition-all duration-200 overflow-hidden
        ${
          dragging
            ? "border-[#1eb8a0] bg-[#1eb8a0]/5 scale-[1.005]"
            : preview
            ? "border-[#1eb8a0]/40 bg-white"
            : "border-[#c8d8e0] bg-[#f7fafc] hover:border-[#1eb8a0]/60 hover:bg-[#f0faf8]"
        }
      `}
      style={{ minHeight: "280px" }}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onInputChange}
      />

      {preview ? (
        /* preview state */
        <div className="relative w-full h-full" style={{ minHeight: "280px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={preview}
            alt="cover preview"
            className="w-full h-full object-cover"
            style={{ minHeight: "280px" }}
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                inputRef.current?.click();
              }}
              className="bg-white/90 text-[#1a2a2a] font-sans text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-white transition-colors"
            >
              변경
            </button>
            <button
              onClick={handleRemove}
              className="bg-white/20 text-white border border-white/40 font-sans text-sm px-5 py-2.5 rounded-lg hover:bg-white/30 transition-colors"
            >
              삭제
            </button>
          </div>
          {/* filename tag */}
          <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded">
            <span className="font-mono text-[10px] text-white/80 tracking-wider">
              {value?.name}
            </span>
          </div>
        </div>
      ) : (
        /* empty state */
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
          {/* icon */}
          <div
            className={`transition-transform duration-200 ${
              dragging ? "scale-110" : ""
            }`}
          >
            <ImagePlusIcon color="#b0c4ce" width={48} className="shrink-0" />
          </div>
          <div className="text-center">
            <p className="font-sans font-bold text-[#3a4a55] text-lg mb-1.5">
              {dragging ? "여기에 놓으세요" : "이미지 업로드"}
            </p>
            <p className="font-sans text-[#8a9eaa] text-sm">
              클릭하거나 이미지를 이곳으로 드래그하세요
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
