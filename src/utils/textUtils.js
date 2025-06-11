// ひらがなをカタカナに変換する関数
export const toKatakana = (str) => {
  return str.replace(/[\u3041-\u3096]/g, function(match) {
    return String.fromCharCode(match.charCodeAt(0) + 0x60);
  });
};

// ひらがなまたはカタカナかどうかをチェックする関数
export const isHiraganaOrKatakana = (str) => {
  return /^[\u3040-\u309F\u30A0-\u30FF]+$/.test(str);
}; 