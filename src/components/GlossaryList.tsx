import React from 'react';

interface Term {
  term: string;
  reading: string;
  description: string;
}

interface GlossaryListProps {
  terms: Term[];
}

const GlossaryList: React.FC<GlossaryListProps> = ({ terms }) => {
  // 日本語とアルファベットで分類
  const japaneseTerms = terms.filter(term => /^[ぁ-んァ-ン一-龯]/.test(term.reading));
  const alphabetTerms = terms.filter(term => /^[a-zA-Z]/.test(term.reading));

  // 読み仮名でソート
  const sortedJapaneseTerms = japaneseTerms.sort((a, b) => a.reading.localeCompare(b.reading, 'ja'));
  const sortedAlphabetTerms = alphabetTerms.sort((a, b) => a.reading.localeCompare(b.reading, 'en'));

  // 見出し文字を取得する関数
  const getHeading = (reading: string): string => {
    if (/^[ぁ-んァ-ン一-龯]/.test(reading)) {
      return reading.charAt(0).replace(/[ァ-ン]/g, char => 
        String.fromCharCode(char.charCodeAt(0) - 0x60)
      );
    }
    return reading.charAt(0).toUpperCase();
  };

  // 見出しごとにグループ化
  const groupTerms = (sortedTerms: Term[]) => {
    const groups: { [key: string]: Term[] } = {};
    sortedTerms.forEach(term => {
      const heading = getHeading(term.reading);
      if (!groups[heading]) {
        groups[heading] = [];
      }
      groups[heading].push(term);
    });
    return groups;
  };

  const japaneseGroups = groupTerms(sortedJapaneseTerms);
  const alphabetGroups = groupTerms(sortedAlphabetTerms);

  return (
    <div className="glossary-container">
      {/* 日本語の用語 */}
      {Object.entries(japaneseGroups).map(([heading, terms]) => (
        <div key={heading} className="glossary-section">
          <h2 className="glossary-heading">{heading}</h2>
          {terms.map((term, index) => (
            <div key={index} className="glossary-item">
              <h3>{term.term}</h3>
              <p>{term.description}</p>
            </div>
          ))}
        </div>
      ))}

      {/* アルファベットの用語 */}
      {Object.entries(alphabetGroups).map(([heading, terms]) => (
        <div key={heading} className="glossary-section">
          <h2 className="glossary-heading">{heading}</h2>
          {terms.map((term, index) => (
            <div key={index} className="glossary-item">
              <h3>{term.term}</h3>
              <p>{term.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GlossaryList; 