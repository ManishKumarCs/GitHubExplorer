import React from "react";

function LanguageFilter({ selectedLanguage, setSelectedLanguage }) {
  const languages = ["JavaScript", "Python", "Java", "C++", "TypeScript", "Go", "Ruby"];

  return (
    <div className="mb-4">
      <label className="block text-lg font-medium mb-2">Select Language:</label>
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        className="p-2 border rounded w-full"
      >
        <option value="">All Languages</option>
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageFilter;
