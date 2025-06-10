// ひらがなをカタカナに変換する関数
export const toKatakana = (text) => {
  return text.replace(/[\u3041-\u3096]/g, (match) => {
    return String.fromCharCode(match.charCodeAt(0) + 0x60);
  });
};

// ひらがなまたはカタカナかどうかを判定する関数
export const isHiraganaOrKatakana = (text) => {
  return /^[\u3040-\u309F\u30A0-\u30FF]+$/.test(text);
}; 