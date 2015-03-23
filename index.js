var _ = require('lodashim'),
	users = [
		{name: 'Henri', mainLanguage: 'Portuguese', addLanguage: 'Arabic', removeLanguage: 'English'},
		{name: 'Leandro', mainLanguage: 'Portuguese', addLanguage: 'Arabic', removeLanguage: 'Spanish'},
		{name: 'Ivan', mainLanguage: 'Portuguese', addLanguage: 'Korean', removeLanguage: 'Mandarin'},
		{name: 'Micael', mainLanguage: 'Portuguese', addLanguage: 'English', removeLanguage: 'Spanish'},
		{name: 'Emmerson', mainLanguage: 'Portuguese', addLanguage: 'Italian', removeLanguage: 'Arabic'},
		{name: 'Rodolfo', mainLanguage: 'Portuguese', addLanguage: 'German', removeLanguage: 'Italian'},
		{name: 'Sergio', mainLanguage: 'Portuguese', addLanguage: 'Latin', removeLanguage: 'French'},
	],
	languages = [
		{name: 'Mandarin', originalName: '官話 / 官话', population: 955},
		{name: 'Spanish', originalName: 'Español', population: 405},
		{name: 'English', originalName: '', population: 360},
		{name: 'Hindi', originalName: 'हिन्दी', population: 310},
		{name: 'Arabic', originalName: 'العربيَّة', population: 295},
		{name: 'Portuguese', originalName: 'Português', population: 215},
		{name: 'Bengali', originalName: 'বাংলা', population: 205},
		{name: 'Russian', originalName: 'Русский', population: 155},
		{name: 'Japanese', originalName: '日本語', population: 125},
		{name: 'Punjabi', originalName: 'ਪੰਜਾਬੀ, پنجابی', population: 102},
		{name: 'German', originalName: 'Deutsch', population: 89},
		{name: 'Javanese', originalName: 'Basa Jawa', population: 82},
		{name: 'Wu', originalName: '吳語 / 吴语', population: 80},
		{name: 'Malay/Indonesian', originalName: 'Bahasa Melayu, Bahasa Indonesia', population: 77},
		{name: 'Telugu', originalName: 'తెలుగు', population: 76},
		{name: 'Korean', originalName: '한국어, 조선말', population: 76},
		{name: 'Vietnamese', originalName: 'Tiếng Việt', population: 76},
		{name: 'French', originalName: 'Français', population: 74},
		{name: 'Marathi', originalName: 'मराठी', population: 73},
		{name: 'Tamil', originalName: 'தமிழ்', population: 70},
		{name: 'Persian', originalName: 'فارسی', population: 65},
		{name: 'Urdu', originalName: 'اُردُو', population: 66},
		{name: 'Turkish', originalName: 'Türkçe', population: 63},
		{name: 'Italian', originalName: 'Italiano', population: 59},
		{name: 'Cantonese', originalName: '粵語 / 粤语', population: 59},
		{name: 'Thai', originalName: 'ภาษาไทย', population: 56},
		{name: 'Gujarati', originalName: 'ગુજરાતી', population: 49},
		{name: 'Jin', originalName: '晉語 / 晋语', population: 48},
		{name: 'Min_Nan', originalName: '閩南語 / 闽南语', population: 47},
		{name: 'Polish', originalName: 'Polski', population: 40},
		{name: 'Kannada', originalName: 'ಕನ್ನಡ', population: 38},
		{name: 'Pashto', originalName: 'پښتو', population: 39},
		{name: 'Xiang', originalName: '湘語 / 湘语', population: 38},
		{name: 'Malayalam', originalName: 'മലയാളം', population: 38},
		{name: 'Sundanese', originalName: 'Aksara Sunda', population: 38},
		{name: 'Hausa', originalName: 'هَرْشَن هَوْسَ', population: 34},
		{name: 'Burmese', originalName: 'မြန်မာစာ', population: 33},
		{name: 'Oriya', originalName: 'ଓଡ଼ିଆ', population: 33},
		{name: 'Hakka', originalName: '客家話 / 客家话', population: 31},
		{name: 'Ukrainian', originalName: 'українська мова', population: 30},
		{name: 'Bhojpuri', originalName: 'भोजपुरी', population: 29},
		{name: 'Tagalog', originalName: 'Wikang Tagalog', population: 28},
		{name: 'Yoruba', originalName: 'Èdè Yorùbá', population: 28},
		{name: 'Maithili', originalName: 'मैथिली, মৈথিলী', population: 27},
		{name: 'Sindhi', originalName: 'سنڌي, सिन्धी', population: 26},
		{name: 'Swahili', originalName: 'Kiswahili', population: 26},
		{name: 'Uzbek, Oʻzbek', originalName: 'Ўзбек, اوزبیک', population: 26},
		{name: 'Amharic', originalName: 'አማርኛ', population: 25},
		{name: 'Fula', originalName: 'Fulfulde', population: 24},
		{name: 'Romanian', originalName: 'Română', population: 24},
		{name: 'Igbo', originalName: 'Asụsụ Igbo', population: 24},
		{name: 'Oromo', originalName: 'Afaan Oromo', population: 24},
		{name: 'Azerbaijani', originalName: 'Azərbaycan', population: 23},
		{name: 'Awadhi', originalName: 'अवधी', population: 22},
		{name: 'Gan', originalName: '贛語 / 赣语', population: 22},
		{name: 'Cebuano', originalName: 'Binisaya', population: 21},
		{name: 'Dutch', originalName: 'Nederlands, Vlaams', population: 21},
		{name: 'Kurdish', originalName: 'كوردی', population: 21},
		{name: 'Malagasy', originalName: 'Malagasy', population: 18},
		{name: 'Serbo-Croatian', originalName: 'Srpskohrvatski, hrvatskosrpski, српскохрватски, хрватскосрпски', population: 19},
		{name: 'Saraiki', originalName: 'سرائیکی', population: 17},
		{name: 'Nepali', originalName: 'नेपाली', population: 17},
		{name: 'Sinhalese', originalName: 'සිංහල', population: 16},
		{name: 'Chittagonian', originalName: 'টগাঁইয়া বুলি', population: 16},
		{name: 'Khmer', originalName: 'ភាសាខ្មែរ', population: 16},
		{name: 'Zhuang', originalName: 'Vahcuengh, 话壮', population: 16},
		{name: 'Assamese', originalName: 'অসমীয়া', population: 15},
		{name: 'Madurese', originalName: 'Madhura', population: 15},
		{name: 'Somali', originalName: 'Af-Soomaali', population: 15},
		{name: 'Haryanvi', originalName: 'हरियाणवी', population: 14},
		{name: 'Magahi', originalName: 'मगही', population: 14},
		{name: 'Marwari', originalName: 'मारवाड़ी', population: 14},
		{name: 'Chhattisgarhi', originalName: 'छत्तीसगढ़ी', population: 12},
		{name: 'Hungarian', originalName: 'Magyar', population: 13},
		{name: 'Greek', originalName: 'ελληνικά', population: 12},
		{name: 'Akan', originalName: 'Twi, Fante', population: 11},
		{name: 'Chewa', originalName: 'Nyanja', population: 12},
		{name: 'Deccan', originalName: 'دکنی', population: 11},
		{name: 'Kazakh', originalName: 'Qazaqşa, Қазақша, قازاق ٴتىلى;', population: 11},
		{name: 'Min_Bei', originalName: '閩北語 / 闽北语', population: 10.9},
		{name: 'Sylheti', originalName: 'ছিলটী', population: 10.7},
		{name: 'Zulu', originalName: 'isiZulu', population: 10.4},
		{name: 'Czech', originalName: 'Čeština', population: 10.0},
		{name: 'Dhundhari', originalName: 'Dhundhari', population: 9.6},
		{name: 'Haitian Creole', originalName: 'Kreyòl Ayisyen', population: 9.6},
		{name: 'Kinyarwanda', originalName: 'Ikinyarwanda', population: 9.8},
		{name: 'Ilokano', originalName: 'Ilokano', population: 9.1},
		{name: 'Min_Dong', originalName: '閩東語 / 闽东语', population: 9.5},
		{name: 'Hmong', originalName: 'Hmong', population: 8.4},
		{name: 'Kirundi', originalName: 'Kirundi', population: 8.8},
		{name: 'Quechua', originalName: 'Quechua', population: 8.9},
		{name: 'Shona', originalName: 'Shona', population: 8.3},
		{name: 'Swedish', originalName: 'Swedish', population: 8.7},
		{name: 'Hiligaynon', originalName: 'Hiligaynon', population: 8.2},
		{name: 'Uyghur', originalName: 'ئۇيغۇرچە', population: 8.2},
		{name: 'Balochi', originalName: 'بلوچی', population: 7.6},
		{name: 'Belarusian', originalName: 'беларусы', population: 7.6},
		{name: 'Konkani', originalName: 'कोंकणी, ಕೊಂಕಣಿ', population: 7.4},
		{name: 'Mossi', originalName: 'Mossi', population: 7.6},
		{name: 'Xhosa', originalName: 'Xhosa', population: 7.6},
		{name: 'Latin', originalName: 'Latin', population: 0}
	],
	added = [];

for (user in users) {

	var add = _.remove(languages, function(language) {
		return (users[user].addLanguage == language.name);
	});

	if (add.length) {
		added.push(add[0]);
	}

};

var selectedLanguages = _.union(added, languages);

for (user in users) {

	_.remove(selectedLanguages, function(language) {
		return (users[user].removeLanguage == language.name);
	});

	_.remove(selectedLanguages, function(language) {
		return (users[user].mainLanguage == language.name);
	});

};

selectedLanguages = _.take(selectedLanguages, users.length);

_.randomize(selectedLanguages);

for(user in users) {
	users[user].sortedLanguage = selectedLanguages[user].name;
}

console.log(users);

