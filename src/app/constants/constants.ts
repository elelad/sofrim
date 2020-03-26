// tslint:disable: max-line-length

export class OmerDay {
    constructor(
        public omerDayId: number, public hebrewDay: number, public hebrewMonth: string, public omer: string, public shem: string,
        public fullHebDate: string, public teman: string, public zohar: string, public kavana: string) {

    }

    getOmerString(nosach?: string) {
        let fullOmer = '';
        if (!nosach) {
            nosach = 'as';
        }
        switch (nosach) {
            case 'as':
                fullOmer = this.omer + ' ' + this.shem + ' לָעֹמֶר';
                break;
            case 'ask':
                fullOmer = this.omer + ' ' + this.shem + ' בָּעֹמֶר';
                break;
            case 'em':
                fullOmer = this.omer + ' לָעֹמֶר ' + this.shem;
                break;
            case 'te':
                fullOmer = this.teman;
                break;
        }
        return fullOmer;

    }
}

export class C {
    static readonly notOmerYetMsg: string = 'עדיין לא ספירת העומר...';
    static readonly notOmerPassMsg: string = 'ספירת העומר הסתיימה, נתראה בשנה הבאה...';
    static readonly edotMizrachNosach = 'em';
    static readonly edotMizrachNosachTitle = 'עדות המזרח';
    static readonly ashkenazNosach = 'as';
    static readonly ashkenazNosachTitle = 'אשכנז';
    static readonly hebWeekDays: string[] = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
    static readonly lzichro: string = '&nbsp;&nbsp;&nbsp;לזכרו של יקירינו רועי מינץ ז"ל';
    static readonly localSofrimNextYearReminder: string = 'sofrimNextYearReminder';

    /*static readonly omerDays: OmerDay[] = [
        new OmerDay(1, 16, "Nisan", "היום יום אחד", "", 'ט"ז בניסן', "הַאידַּאנָא חַד יוֹמָא בְּעֻמרָא"),
        new OmerDay(2, 17, "Nisan", "היום שני ימים", "", 'י"ז בניסן', 'הַאידַּאנָא תְּרֵין יוֹמֵי בְּעֻמרָא'),
        new OmerDay(3, 18, "Nisan", "היום שלושה ימים", "", 'י"ח בניסן', 'הַאידַּאנָא תְּלָתָא יוֹמֵי בְּעֻמרָא'),
        new OmerDay(4, 19, "Nisan", "היום ארבעה ימים", "", 'י"ט בניסן;', 'הַאידַּאנָא אַרבְּעָא יוֹמֵי בְּעֻמרָא'),
        new OmerDay(5, 20, "Nisan", "היום חמישה ימים", "", 'כ בניסן', 'הַאידַּאנָא חַמשָׁא יוֹמֵי בְּעֻמרָא'),
        new OmerDay(6, 21, "Nisan", "היום שישה ימים", "", 'ב"א בניסן', 'הַאידַּאנָא שִׁתָּא יוֹמֵי בְּעֻמרָא'),
        new OmerDay(7, 22, "Nisan", "היום שבעה ימים", "שהם שבוע אחד", 'כ"ב בניסן', 'הַאידַּאנָא שִׁבעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא'),
        new OmerDay(8, 23, "Nisan", "היום שמונה ימים", "שהם שבוע אחד ויום אחד", 'כ"ג בניסן', 'הַאידַּאנָא תְּמָניָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא וְחַד יוֹמָא'),
        new OmerDay(9, 24, "Nisan", "היום תשעה ימים", "שהם שבוע אחד ושני ימים", 'כ"ד בניסן', 'הַאידַּאנָא תִּשׁעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא וּתרֵין יוֹמֵי'),
        new OmerDay(10, 25, "Nisan", "היום עשרה ימים", "שהם שבוע אחד ושלושה ימים", 'כ"ה בניסן', 'הַאידַּאנָא עַשׂרָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא וּתלָתָא יוֹמֵי'),
        new OmerDay(11, 26, "Nisan", "היום אחד עשר יום", "שהם שבוע אחד וארבעה ימים", 'כ"ו בניסן', 'הַאידַּאנָא חַד עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא וְאַרבְּעָא יוֹמֵי'),
        new OmerDay(12, 27, "Nisan", "היום שנים עשר יום", "שהם שבוע אחד וחמישה ימים", 'כ"ז בניסן', 'הַאידַּאנָא תְּרֵי עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא וְחַמשָׁא יוֹמֵי'),
        new OmerDay(13, 28, "Nisan", "היום שלושה עשר יום", "שהם שבוע אחד ושישה ימים", 'כ"ח בניסן', 'הַאידַּאנָא תְּלָת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא וְשִׁתָּא יוֹמֵי'),
        new OmerDay(14, 29, "Nisan", "היום ארבעה עשר יום", "שהם שני שבועות", 'כ"ט בניסן', 'הַאידַּאנָא אַרבַּעַת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּרֵין שָׁבוּעֵי'),
        new OmerDay(15, 30, "Nisan", "היום חמישה עשר יום", "שהם שני שבועות ויום אחד", 'ל בניסן', 'הַאידַּאנָא חַמשַׁת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּרֵין שָׁבוּעֵי וְחַד יוֹמָא'),
        new OmerDay(16, 1, "Iyyar", "היום שישה עשר יום", "שהם שני שבועות ושני ימים", 'א באייר', 'הַאידַּאנָא שִׁתַּת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְאִינּוּן תְּרֵין שָׁבוּעֵי וּתרֵין יוֹמֵי'),
        new OmerDay(17, 2, "Iyyar", "היום שבעה עשר יום", "שהם שני שבועות ושלושה ימים", 'ב באייר', 'הַאידַּאנָא שִׁבעַת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּרֵין שָׁבוּעֵי וּתלָתָא יוֹמֵי'),
        new OmerDay(18, 3, "Iyyar", "היום שמונה עשר יום", "שהם שני שבועות וארבעה ימים", 'ג באייר', 'הַאידַּאנָא תַּמנַת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּרֵין שָׁבוּעֵי וְאַרבְּעָא יוֹמֵי'),
        new OmerDay(19, 4, "Iyyar", "היום תשעה עשר יום", "שהם שני שבועות וחמישה ימים", 'ד באייר', 'הַאידַּאנָא תִּשׁעַת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּרֵין שָׁבוּעֵי וְחַמשָׁא יוֹמֵי'),
        new OmerDay(20, 5, "Iyyar", "היום עשרים יום", "שהם שני שבועות ושישה ימים", 'ה באייר', 'הַאידַּאנָא עַשׂרִין יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּרֵין שָׁבוּעֵי וְשִׁתָּא יוֹמֵי'),
        new OmerDay(21, 6, "Iyyar", "היום אחד ועשרים יום", "שהם שלושה שבועות", 'ו באייר', 'הַאידַּאנָא עַשׂרִין וְחַד יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי'),
        new OmerDay(22, 7, "Iyyar", "היום שנים ועשרים יום", "שהם שלושה שבועות ויום אחד", 'ז באייר', 'הַאידַּאנָא עַשׂרִין וּתרֵין יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי וְחַד יוֹמָא'),
        new OmerDay(23, 8, "Iyyar", "היום שלושה ועשרים יום", "שהם שלושה שבועות ושני ימים", 'ח באייר', 'הַאידַּאנָא עַשׂרִין וּתלָתָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי וּתרֵין יוֹמֵי'),
        new OmerDay(24, 9, "Iyyar", "היום ארבעה ועשרים יום", "שהם שלושה שבועות ושלושה ימים", 'ט באייר', 'הַאידַּאנָא עַשׂרִין וְאַרבְּעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי וּתלָתָא יוֹמֵי'),
        new OmerDay(25, 10, "Iyyar", "היום חמישה ועשרים יום", "שהם שלושה שבועות וארבעה ימים", 'י באייר', 'הַאידַּאנָא עַשׂרִין וְחַמשָׁא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי וְאַרבְּעָא יוֹמֵי'),
        new OmerDay(26, 11, "Iyyar", "היום שישה ועשרים יום", "שהם שלושה שבועות וחמישה ימים", 'י"א באייר', 'הַאידַּאנָא עַשׂרִין וְשִׁתָּא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי וְחַמשָׁא יוֹמֵי'),
        new OmerDay(27, 12, "Iyyar", "היום שבעה ועשרים יום", "שהם שלושה שבועות ושישה ימים", 'י"ב באייר', 'הַאידַּאנָא עַשׂרִין וְשִׁבעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי וְשִׁתָּא יוֹמֵי'),
        new OmerDay(28, 13, "Iyyar", "היום שמונה ועשרים יום", "שהם ארבעה שבועות", 'י"ג באייר', 'הַאידַּאנָא עַשׂרִין וּתמָניָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי'),
        new OmerDay(29, 14, "Iyyar", "היום תשעה ועשרים יום", "שהם ארבעה שבועות ויום אחד", 'י"ד באייר', 'הַאידַּאנָא עַשׂרִין וְתִשׁעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי וְחַד יוֹמָא'),
        new OmerDay(30, 15, "Iyyar", "היום שלושים יום", "שהם ארבעה שבועות ושני ימים", 'ט"ו באייר', 'הַאידַּאנָא תְּלָתִין יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי וּתרֵין יוֹמֵי'),
        new OmerDay(31, 16, "Iyyar", "היום אחד ושלושים יום", "שהם ארבעה שבועות ושלושה ימים", 'ט"ז באייר', 'הַאידַּאנָא תְּלָתִין וְחַד יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי וּתלָתָא יוֹמֵי'),
        new OmerDay(32, 17, "Iyyar", "היום שנים ושלושים יום", "שהם ארבעה שבועות וארבעה ימים", 'י"ז באייר', 'הַאידַּאנָא תְּלָתִין וּתרֵין יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי וְאַרבְּעָא יוֹמֵי'),
        new OmerDay(33, 18, "Iyyar", "היום שלושה ושלושים יום", "שהם ארבעה שבועות וחמישה ימים", 'י"ח באייר', 'הַאידַּאנָא תְּלָתִין וּתלָתָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי וְחַמשָׁא יוֹמֵי'),
        new OmerDay(34, 19, "Iyyar", "היום ארבעה ושלושים יום", "שהם ארבעה שבועות ושישה ימים", 'י"ט באייר', 'הַאידַּאנָא תְּלָתִין וְאַרבְּעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי וְשִׁתָּא יוֹמֵי'),
        new OmerDay(35, 20, "Iyyar", "היום חמישה ושלושים יום", "שהם חמישה שבועות", 'כ באייר', 'הַאידַּאנָא תְּלָתִין וְחַמשָׁא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי'),
        new OmerDay(36, 21, "Iyyar", "היום שישה ושלושים יום", "שהם חמישה שבועות ויום אחד", 'כ"א באייר', 'הַאידַּאנָא תְּלָתִין וְשִׁתָּא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי וְחַד יוֹמָא'),
        new OmerDay(37, 22, "Iyyar", "היום שבעה ושלושים יום", "שהם חמישה שבועות ושני ימים", 'כ"ב באייר', 'הַאידַּאנָא תְּלָתִין וְשִׁבעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי וּתרֵין יוֹמֵי'),
        new OmerDay(38, 23, "Iyyar", "היום שמונה ושלושים יום", "שהם חמישה שבועות ושלושה ימים", 'כ"ג באייר', 'הַאידַּאנָא תְּלָתִין וּתמָניָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי וּתלָתָא יוֹמֵי'),
        new OmerDay(39, 24, "Iyyar", "היום תשעה ושלושים יום", "שהם חמישה שבועות וארבעה ימים", 'כ"ד באייר', 'הַאידַּאנָא תְּלָתִין וְתִשׁעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי וְאַרבְּעָא יוֹמֵי'),
        new OmerDay(40, 25, "Iyyar", "היום ארבעים יום", "שהם חמישה שבועות וחמישה ימים", 'כ"ה באייר', 'הַאידַּאנָא אַרבְּעִין יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי וְחַמשָׁא יוֹמֵי'),
        new OmerDay(41, 26, "Iyyar", "היום אחד וארבעים יום", "שהם חמישה שבועות ושישה ימים", 'כ"ו באייר', 'הַאידַּאנָא אַרבְּעִין וְחַד יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי וְשִׁתָּא יוֹמֵי'),
        new OmerDay(42, 27, "Iyyar", "היום שנים וארבעים יום", "שהם שישה שבועות", 'כ"ז באייר', 'הַאידַּאנָא אַרבְּעִין וּתרֵין יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי'),
        new OmerDay(43, 28, "Iyyar", "היום שלושה וארבעים יום", "שהם שישה שבועות ויום אחד", 'כ"ח באייר', 'הַאידַּאנָא אַרבְּעִין וּתלָתָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי וְחַד יוֹמָא'),
        new OmerDay(44, 29, "Iyyar", "היום ארבעה וארבעים יום", "שהם שישה שבועות ושני ימים", 'כ"ט באייר', 'הַאידַּאנָא אַרבְּעִין וְאַרבְּעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי וּתרֵין יוֹמֵי'),
        new OmerDay(45, 1, "Sivan", "היום חמישה וארבעים יום", "שהם שישה שבועות ושלושה ימים", 'א בסיון', 'הַאידַּאנָא אַרבְּעִין וְחַמשָׁא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי וּתלָתָא יוֹמֵי'),
        new OmerDay(46, 2, "Sivan", "היום שישה וארבעים יום", "שהם שישה שבועות וארבעה ימים", 'ב בסיון', 'הַאידַּאנָא אַרבְּעִין וְשִׁתָּא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי וְאַרבְּעָא יוֹמֵי'),
        new OmerDay(47, 3, "Sivan", "היום שבעה וארבעים יום", "שהם שישה שבועות וחמישה ימים", 'ג בסיון', 'הַאידַּאנָא אַרבְּעִין וְשִׁבעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי וְחַמשָׁא יוֹמֵי'),
        new OmerDay(48, 4, "Sivan", "היום שמונה וארבעים יום", "שהם שישה שבועות ושישה ימים", 'ד בסיון', 'הַאידַּאנָא אַרבְּעִין וּתמָניָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי וְשִׁתָּא יוֹמֵי'),
        new OmerDay(49, 5, "Sivan", "היום תשעה וארבעים יום", "שהם שבעה שבועות", 'ה בסיון', 'הַאידַּאנָא אַרבְּעִין וְתִשׁעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁבעָא שָׁבוּעֵי שַׁלמֵי')
    ]*/

    /* static readonly omerDays: OmerDay[] = [
        new OmerDay(1, 16, "Nisan", "הַיּוֹם יוֹם אֶחָד", "", 'ט"ז בניסן', "הַאידַּאנָא חַד יוֹמָא בְּעֻמרָא", "חסד שבחסד"),
        new OmerDay(2, 17, "Nisan", "הַיּוֹם שְׁנֵי יָמִים", "", 'י"ז בניסן', 'הַאידַּאנָא תְּרֵין יוֹמֵי בְּעֻמרָא', "גבורה שבחסד"),
        new OmerDay(3, 18, "Nisan", "הַיּוֹם שְלֹשָה יָמִים", "", 'י"ח בניסן', 'הַאידַּאנָא תְּלָתָא יוֹמֵי בְּעֻמרָא', "תפארת שבחסד"),
        new OmerDay(4, 19, "Nisan", "הַיּוֹם אַרְבָּעָה יָמִים", "", 'י"ט בניסן', 'הַאידַּאנָא אַרבְּעָא יוֹמֵי בְּעֻמרָא', "נצח שבחסד"),
        new OmerDay(5, 20, "Nisan", "הַיּוֹם חֲמִשָּׁה יָמִים", "", 'כ בניסן', 'הַאידַּאנָא חַמשָׁא יוֹמֵי בְּעֻמרָא', "הוד שבחסד"),
        new OmerDay(6, 21, "Nisan", "הַיוֹם שִׁשָּׁה יָמִים", "", 'כ"א בניסן', 'הַאידַּאנָא שִׁתָּא יוֹמֵי בְּעֻמרָא', "יסוד שבחסד"),
        new OmerDay(7, 22, "Nisan", "הַיּוֹם שִׁבְעָה יָמִים", "שֶׁהֵם שָׁבוּעַ אֶחָד", 'כ"ב בניסן', 'הַאידַּאנָא שִׁבעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא', "מַלְכוּת שבחסד"),
        new OmerDay(8, 23, "Nisan", "הַיּוֹם שְׁמוֹנָה יָמִים", "שֶׁהֵם שָׁבוּעַ אֶחָד וְיוֹם אֶחָד", 'כ"ג בניסן', 'הַאידַּאנָא תְּמָניָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא וְחַד יוֹמָא', "חסד שבגבורה"),
        new OmerDay(9, 24, "Nisan", "הַיּוֹם תִּשְׁעָה יָמִים", "שֶׁהֵם שָׁבוּעַ אֶחָד וּשְׁנֵי יָמִים", 'כ"ד בניסן', 'הַאידַּאנָא תִּשׁעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא וּתרֵין יוֹמֵי', "גבורה שבגבורה"),
        new OmerDay(10, 25, "Nisan", "הַיּוֹם עֲשָׂרָה יָמִים", "שֶׁהֵם שָׁבוּעַ אֶחָד וּשְלֹשָה יָמִים", 'כ"ה בניסן', 'הַאידַּאנָא עַשׂרָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא וּתלָתָא יוֹמֵי', "תפארת שבגבורה"),
        new OmerDay(11, 26, "Nisan", "הַיּוֹם אַחַד עָשָׂר יוֹם", "שֶׁהֵם שָׁבוּעַ אֶחָד וְאַרְבָּעָה יָמִים", 'כ"ו בניסן', 'הַאידַּאנָא חַד עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא וְאַרבְּעָא יוֹמֵי', "נצח שבגבורה"),
        new OmerDay(12, 27, "Nisan", "הַיּוֹם שְׁנֵים עָשָׂר יוֹם", "שֶׁהֵם שָׁבוּעַ אֶחָד וַחֲמִשָּׁה יָמִים", 'כ"ז בניסן', 'הַאידַּאנָא תְּרֵי עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא וְחַמשָׁא יוֹמֵי', "הוד שבגבורה"),
        new OmerDay(13, 28, "Nisan", "הַיּוֹם שְׁלֹשָׁה עָשָׂר יוֹם", "שֶׁהֵם שָׁבוּעַ אֶחָד וְשִׁשָּׁה יָמִים", 'כ"ח בניסן', 'הַאידַּאנָא תְּלָת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא וְשִׁתָּא יוֹמֵי', "יסוד שבגבורה"),
        new OmerDay(14, 29, "Nisan", "הַיּוֹם אַרְבָּעָה עָשָׂר יוֹם", "שֶׁהֵם שְׁנֵי שָׁבוּעוֹת", 'כ"ט בניסן', 'הַאידַּאנָא אַרבַּעַת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּרֵין שָׁבוּעֵי', "מַלְכוּת שבגבורה"),
        new OmerDay(15, 30, "Nisan", "הַיּוֹם חֲמִשָּׁה עָשָׂר יוֹם", "שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וְיוֹם אֶחָד", 'ל בניסן', 'הַאידַּאנָא חַמשַׁת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּרֵין שָׁבוּעֵי וְחַד יוֹמָא', "חסד שבתפארת"),
        new OmerDay(16, 1, "Iyyar", "הַיּוֹם שִׁשָּׁה עָשָׂר יוֹם", "שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וּשְנֵי יָמִים", 'א באייר', 'הַאידַּאנָא שִׁתַּת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְאִינּוּן תְּרֵין שָׁבוּעֵי וּתרֵין יוֹמֵי', "גבורה שבתפארת"),
        new OmerDay(17, 2, "Iyyar", "הַיּוֹם שִׁבְעָה עָשָׂר יוֹם", "שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וּשְלֹשָה יָמִים", 'ב באייר', 'הַאידַּאנָא שִׁבעַת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּרֵין שָׁבוּעֵי וּתלָתָא יוֹמֵי', "תפארת שבתפארת"),
        new OmerDay(18, 3, "Iyyar", "הַיּוֹם שְׁמוֹנָה עָשָׂר יוֹם", "שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וְאַרְבָּעָה יָמִים", 'ג באייר', 'הַאידַּאנָא תַּמנַת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּרֵין שָׁבוּעֵי וְאַרבְּעָא יוֹמֵי', "נצח שבתפארת"),
        new OmerDay(19, 4, "Iyyar", "הַיּוֹם תִּשְׁעָה עָשָׂר יוֹם", "שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וַחֲמִשָּׁה יָמִים", 'ד באייר', 'הַאידַּאנָא תִּשׁעַת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּרֵין שָׁבוּעֵי וְחַמשָׁא יוֹמֵי', "הוד שבתפארת"),
        new OmerDay(20, 5, "Iyyar", "הַיּוֹם עֶשְׂרִים יוֹם", "שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וְשִׁשָּׁה יָמִים", 'ה באייר', 'הַאידַּאנָא עַשׂרִין יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּרֵין שָׁבוּעֵי וְשִׁתָּא יוֹמֵי', "יסוד שבתפארת"),
        new OmerDay(21, 6, "Iyyar", "הַיּוֹם אֶחָד וְעֶשְׂרִים יוֹם", "שֶׁהֵם שְׁלֹשָה שָׁבוּעוֹת", 'ו באייר', 'הַאידַּאנָא עַשׂרִין וְחַד יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי', "מַלְכוּת שבתפארת"),
        new OmerDay(22, 7, "Iyyar", "הַיּוֹם שְׁנַיִם וְעֶשְׂרִים יוֹם", "שֶׁהֵם שְׁלֹשָה שָׁבוּעוֹת וְיוֹם אֶחָד", 'ז באייר', 'הַאידַּאנָא עַשׂרִין וּתרֵין יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי וְחַד יוֹמָא', "חסד שבנצח"),
        new OmerDay(23, 8, "Iyyar", "הַיּוֹם שְׁלֹשָׁה וְעֶשְׂרִים יוֹם", "שֶׁהֵם שְׁלֹשָה שָׁבוּעוֹת וּשְׁנֵי יָמִים", 'ח באייר', 'הַאידַּאנָא עַשׂרִין וּתלָתָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי וּתרֵין יוֹמֵי', "גבורה שבנצח"),
        new OmerDay(24, 9, "Iyyar", "הַיּוֹם אַרְבָּעָה וְעֶשְׂרִים יוֹם", "שֶׁהֵם שְׁלֹשָה שָׁבוּעוֹת וּשְׁלֹשָה יָמִים", 'ט באייר', 'הַאידַּאנָא עַשׂרִין וְאַרבְּעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי וּתלָתָא יוֹמֵי', "תפארת שבנצח"),
        new OmerDay(25, 10, "Iyyar", "הַיּוֹם חֲמִשָּׁה וְעֶשְׂרִים יוֹם", "שֶׁהֵם שְׁלֹשָה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים", 'י באייר', 'הַאידַּאנָא עַשׂרִין וְחַמשָׁא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי וְאַרבְּעָא יוֹמֵי', "נצח שבנצח"),
        new OmerDay(26, 11, "Iyyar", "הַיּוֹם שִׁשָּׁה וְעֶשְׂרִים יוֹם", "שֶׁהֵם שְׁלֹשָה שָׁבוּעוֹת וַחֲמִשָּׁה יָמִים", 'י"א באייר', 'הַאידַּאנָא עַשׂרִין וְשִׁתָּא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי וְחַמשָׁא יוֹמֵי', "הוד שבנצח"),
        new OmerDay(27, 12, "Iyyar", "הַיּוֹם שִׁבְעָה וְעֶשְׂרִים יוֹם", "שֶׁהֵם שְׁלֹשָה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים", 'י"ב באייר', 'הַאידַּאנָא עַשׂרִין וְשִׁבעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי וְשִׁתָּא יוֹמֵי', "יסוד שבנצח"),
        new OmerDay(28, 13, "Iyyar", "הַיּוֹם שְׁמוֹנָה וְעֶשְׂרִים יוֹם", "שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת", 'י"ג באייר', 'הַאידַּאנָא עַשׂרִין וּתמָניָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי', "מַלְכוּת שבנצח"),
        new OmerDay(29, 14, "Iyyar", "הַיּוֹם תִּשְׁעָה וְעֶשְׂרִים יוֹם", "שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וְיוֹם אֶחָד", 'י"ד באייר', 'הַאידַּאנָא עַשׂרִין וְתִשׁעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי וְחַד יוֹמָא', "חסד שבהוד"),
        new OmerDay(30, 15, "Iyyar", "הַיּוֹם שְׁלשִׁים יוֹם", "שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וּשְׁנֵי יָמִים", 'ט"ו באייר', 'הַאידַּאנָא תְּלָתִין יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי וּתרֵין יוֹמֵי', "גבורה שבהוד"),
        new OmerDay(31, 16, "Iyyar", "הַיּוֹם אֶחָד וּשְׁלשִׁים יוֹם", "שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וּשְׁלֹשָה יָמִים", 'ט"ז באייר', 'הַאידַּאנָא תְּלָתִין וְחַד יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי וּתלָתָא יוֹמֵי', "תפארת שבהוד"),
        new OmerDay(32, 17, "Iyyar", "הַיּוֹם שְׁנַיִם וּשְׁלשִׁים יוֹם", "שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים", 'י"ז באייר', 'הַאידַּאנָא תְּלָתִין וּתרֵין יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי וְאַרבְּעָא יוֹמֵי', "נצח שבהוד"),
        new OmerDay(33, 18, "Iyyar", "הַיּוֹם שְׁלֹשָה וּשְׁלשִׁים יוֹם", "שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וַחֲמִשָּׁה יָמִים", 'י"ח באייר', 'הַאידַּאנָא תְּלָתִין וּתלָתָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי וְחַמשָׁא יוֹמֵי', "הוד שבהוד"),
        new OmerDay(34, 19, "Iyyar", "הַיּוֹם אַרְבָּעָה וּשְׁלשִׁים יוֹם", "שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים", 'י"ט באייר', 'הַאידַּאנָא תְּלָתִין וְאַרבְּעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי וְשִׁתָּא יוֹמֵי', "יסוד שבהוד"),
        new OmerDay(35, 20, "Iyyar", "הַיּוֹם חֲמִשָּׁה וּשְׁלשִׁים יוֹם", "שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת", 'כ באייר', 'הַאידַּאנָא תְּלָתִין וְחַמשָׁא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי', "מַלְכוּת שבהוד"),
        new OmerDay(36, 21, "Iyyar", "הַיּוֹם שִׁשָּׁה וּשְׁלשִׁים יוֹם", "שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְיוֹם אֶחָד", 'כ"א באייר', 'הַאידַּאנָא תְּלָתִין וְשִׁתָּא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי וְחַד יוֹמָא', "חסד שביסוד"),
        new OmerDay(37, 22, "Iyyar", "הַיּוֹם שִׁבְעָה וּשְׁלשִׁים יוֹם", "שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וּשְׁנֵי יָמִים", 'כ"ב באייר', 'הַאידַּאנָא תְּלָתִין וְשִׁבעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי וּתרֵין יוֹמֵי', "גבורה שביסוד"),
        new OmerDay(38, 23, "Iyyar", "הַיּוֹם שְׁמוֹנָה וּשְׁלשִׁים יוֹם", "שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וּשְׁלֹשָה יָמִים", 'כ"ג באייר', 'הַאידַּאנָא תְּלָתִין וּתמָניָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי וּתלָתָא יוֹמֵי', "תפארת שביסוד"),
        new OmerDay(39, 24, "Iyyar", "הַיּוֹם תִּשְׁעָה וּשְׁלשִׁים יוֹם", "שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים", 'כ"ד באייר', 'הַאידַּאנָא תְּלָתִין וְתִשׁעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי וְאַרבְּעָא יוֹמֵי', "נצח שביסוד"),
        new OmerDay(40, 25, "Iyyar", "הַיּוֹם אַרְבָּעִים יוֹם", "שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְחֲמִשָּׁה יָמִים", 'כ"ה באייר', 'הַאידַּאנָא אַרבְּעִין יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי וְחַמשָׁא יוֹמֵי', "הוד שביסוד"),
        new OmerDay(41, 26, "Iyyar", "הַיּוֹם אֶחָד וְאַרְבָּעִים יוֹם", "שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים", 'כ"ו באייר', 'הַאידַּאנָא אַרבְּעִין וְחַד יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי וְשִׁתָּא יוֹמֵי', "יסוד שביסוד"),
        new OmerDay(42, 27, "Iyyar", "הַיּוֹם שְׁנַיִם וְאַרְבָּעִים יוֹם", "שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת", 'כ"ז באייר', 'הַאידַּאנָא אַרבְּעִין וּתרֵין יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי', "מלכות שביסוד"),
        new OmerDay(43, 28, "Iyyar", "הַיּוֹם שְׁלֹשָה וְאַרְבָּעִים יוֹם", "שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וְיוֹם אֶחָד", 'כ"ח באייר', 'הַאידַּאנָא אַרבְּעִין וּתלָתָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי וְחַד יוֹמָא', "חסד שבמלכות"),
        new OmerDay(44, 29, "Iyyar", "הַיּוֹם אַרְבָּעָה וְאַרְבָּעִים יוֹם", "שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וּשְׁנֵי יָמִים", 'כ"ט באייר', 'הַאידַּאנָא אַרבְּעִין וְאַרבְּעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי וּתרֵין יוֹמֵי', "גבורה שבמלכות"),
        new OmerDay(45, 1, "Sivan", "הַיּוֹם חֲמִשָּׁה וְאַרְבָּעִים יוֹם", "שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וּשְׁלֹשָה יָמִים", 'א בסיון', 'הַאידַּאנָא אַרבְּעִין וְחַמשָׁא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי וּתלָתָא יוֹמֵי', "תפארת שבמלכות"),
        new OmerDay(46, 2, "Sivan", "הַיּוֹם שִׁשָּׁה וְאַרְבָּעִים יוֹם", "שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים", 'ב בסיון', 'הַאידַּאנָא אַרבְּעִין וְשִׁתָּא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי וְאַרבְּעָא יוֹמֵי', "נצח שבמלכות"),
        new OmerDay(47, 3, "Sivan", "הַיּוֹם שִׁבְעָה וְאַרְבָּעִים יוֹם", "שֶׁהֵם שִׁשָּׁה שָבוּעוֹת וַחֲמִשָּׁה יָמִים", 'ג בסיון', 'הַאידַּאנָא אַרבְּעִין וְשִׁבעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי וְחַמשָׁא יוֹמֵי', "הוד שבמלכות"),
        new OmerDay(48, 4, "Sivan", "הַיּוֹם שְׁמוֹנָה וְאַרְבָּעִים יוֹם", "שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים", 'ד בסיון', 'הַאידַּאנָא אַרבְּעִין וּתמָניָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי וְשִׁתָּא יוֹמֵי', "יסוד שבמלכות"),
        new OmerDay(49, 5, "Sivan", "הַיּוֹם תִּשְׁעָה וְאַרְבָּעִים יוֹם", "שֶׁהֵם שִׁבְעָה שָבוּעוֹת", 'ה בסיון', 'הַאידַּאנָא אַרבְּעִין וְתִשׁעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁבעָא שָׁבוּעֵי שַׁלמֵי', "מַלְכוּת שבמלכות")
    ] */

    static readonly omerDays: OmerDay[] = [
        new OmerDay(1, 16, 'Nisan', 'הַיּוֹם יוֹם אֶחָד', '', 'ט"ז בניסן', 'הַאידַּאנָא חַד יוֹמָא בְּעֻמרָא', 'חסד שבחסד', '<b>אנא</b> חסד שבחסד <b>אלהים</b> י'),
        new OmerDay(2, 17, 'Nisan', 'הַיּוֹם שְׁנֵי יָמִים', '', 'י"ז בניסן', 'הַאידַּאנָא תְּרֵין יוֹמֵי בְּעֻמרָא', 'גבורה שבחסד', '<b>בכח</b> גבורה שבחסד <b>יחננו</b> ש'),
        new OmerDay(3, 18, 'Nisan', 'הַיּוֹם שְלֹשָה יָמִים', '', 'י"ח בניסן', 'הַאידַּאנָא תְּלָתָא יוֹמֵי בְּעֻמרָא', 'תפארת שבחסד', '<b>גדולת</b> תפארת שבחסד <b>ויברכנו</b> מ'),
        new OmerDay(4, 19, 'Nisan', 'הַיּוֹם אַרְבָּעָה יָמִים', '', 'י"ט בניסן', 'הַאידַּאנָא אַרבְּעָא יוֹמֵי בְּעֻמרָא', 'נצח שבחסד', '<b>ימינך</b> נצח שבחסד <b>יאר</b> ח'),
        new OmerDay(5, 20, 'Nisan', 'הַיּוֹם חֲמִשָּׁה יָמִים', '', 'כ בניסן', 'הַאידַּאנָא חַמשָׁא יוֹמֵי בְּעֻמרָא', 'הוד שבחסד', '<b>תתיר</b> הוד שבחסד <b>פניו</b> ו'),
        new OmerDay(6, 21, 'Nisan', 'הַיוֹם שִׁשָּׁה יָמִים', '', 'כ"א בניסן', 'הַאידַּאנָא שִׁתָּא יוֹמֵי בְּעֻמרָא', 'יסוד שבחסד', '<b>צרורה</b> יסוד שבחסד <b>אתנו</b> ו'),
        new OmerDay(7, 22, 'Nisan', 'הַיּוֹם שִׁבְעָה יָמִים', 'שֶׁהֵם שָׁבוּעַ אֶחָד', 'כ"ב בניסן', 'הַאידַּאנָא שִׁבעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא', 'מַלְכוּת שבחסד', '<b>אב&#34;ג ית&#34;ץ</b> מַלְכוּת שבחסד <b>סלה</b> י'),
        new OmerDay(8, 23, 'Nisan', 'הַיּוֹם שְׁמוֹנָה יָמִים', 'שֶׁהֵם שָׁבוּעַ אֶחָד וְיוֹם אֶחָד', 'כ"ג בניסן', 'הַאידַּאנָא תְּמָניָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא וְחַד יוֹמָא', 'חסד שבגבורה', '<b>קבל</b> חסד שבגבורה <b>לדעת</b> ר'),
        new OmerDay(9, 24, 'Nisan', 'הַיּוֹם תִּשְׁעָה יָמִים', 'שֶׁהֵם שָׁבוּעַ אֶחָד וּשְׁנֵי יָמִים', 'כ"ד בניסן', 'הַאידַּאנָא תִּשׁעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא וּתרֵין יוֹמֵי', 'גבורה שבגבורה', '<b>רנת</b> גבורה שבגבורה <b>בארץ</b> נ'),
        new OmerDay(10, 25, 'Nisan', 'הַיּוֹם עֲשָׂרָה יָמִים', 'שֶׁהֵם שָׁבוּעַ אֶחָד וּשְלֹשָה יָמִים', 'כ"ה בניסן', 'הַאידַּאנָא עַשׂרָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא וּתלָתָא יוֹמֵי', 'תפארת שבגבורה', '<b>עמך</b> תפארת שבגבורה <b>דרכך</b> נ'),
        new OmerDay(11, 26, 'Nisan', 'הַיּוֹם אַחַד עָשָׂר יוֹם', 'שֶׁהֵם שָׁבוּעַ אֶחָד וְאַרְבָּעָה יָמִים', 'כ"ו בניסן', 'הַאידַּאנָא חַד עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא וְאַרבְּעָא יוֹמֵי', 'נצח שבגבורה', '<b>שגבנו</b> נצח שבגבורה <b>בכל</b> ו'),
        new OmerDay(12, 27, 'Nisan', 'הַיּוֹם שְׁנֵים עָשָׂר יוֹם', 'שֶׁהֵם שָׁבוּעַ אֶחָד וַחֲמִשָּׁה יָמִים', 'כ"ז בניסן', 'הַאידַּאנָא תְּרֵי עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא וְחַמשָׁא יוֹמֵי', 'הוד שבגבורה', '<b>טהרנו</b> הוד שבגבורה <b>גוים</b> ל'),
        new OmerDay(13, 28, 'Nisan', 'הַיּוֹם שְׁלֹשָׁה עָשָׂר יוֹם', 'שֶׁהֵם שָׁבוּעַ אֶחָד וְשִׁשָּׁה יָמִים', 'כ"ח בניסן', 'הַאידַּאנָא תְּלָת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַד שָׁבוּעָא וְשִׁתָּא יוֹמֵי', 'יסוד שבגבורה', '<b>נוֹרָא</b> יסוד שבגבורה <b>ישועתך</b> א'),
        new OmerDay(14, 29, 'Nisan', 'הַיּוֹם אַרְבָּעָה עָשָׂר יוֹם', 'שֶׁהֵם שְׁנֵי שָׁבוּעוֹת', 'כ"ט בניסן', 'הַאידַּאנָא אַרבַּעַת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּרֵין שָׁבוּעֵי', 'מַלְכוּת שבגבורה', '<b>קר&#34;ע שט&#34;ן</b> מַלְכוּת שבגבורה <b>יודוך</b> מ'),
        new OmerDay(15, 30, 'Nisan', 'הַיּוֹם חֲמִשָּׁה עָשָׂר יוֹם', 'שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וְיוֹם אֶחָד', 'ל בניסן', 'הַאידַּאנָא חַמשַׁת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּרֵין שָׁבוּעֵי וְחַד יוֹמָא', 'חסד שבתפארת', '<b>נא</b> חסד שבתפארת <b>עמים</b> י'),
        new OmerDay(16, 1, 'Iyyar', 'הַיּוֹם שִׁשָּׁה עָשָׂר יוֹם', 'שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וּשְנֵי יָמִים', 'א באייר', 'הַאידַּאנָא שִׁתַּת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְאִינּוּן תְּרֵין שָׁבוּעֵי וּתרֵין יוֹמֵי', 'גבורה שבתפארת', '<b>גבור</b> גבורה שבתפארת <b>אלהים</b> ם'),
        new OmerDay(17, 2, 'Iyyar', 'הַיּוֹם שִׁבְעָה עָשָׂר יוֹם', 'שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וּשְלֹשָה יָמִים', 'ב באייר', 'הַאידַּאנָא שִׁבעַת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּרֵין שָׁבוּעֵי וּתלָתָא יוֹמֵי', 'תפארת שבתפארת', '<b>דורשי</b> תפארת שבתפארת <b>יודוך</b> כ'),
        new OmerDay(18, 3, 'Iyyar', 'הַיּוֹם שְׁמוֹנָה עָשָׂר יוֹם', 'שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וְאַרְבָּעָה יָמִים', 'ג באייר', 'הַאידַּאנָא תַּמנַת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּרֵין שָׁבוּעֵי וְאַרבְּעָא יוֹמֵי', 'נצח שבתפארת', '<b>יחודך</b> נצח שבתפארת <b>עמים</b> י'),
        new OmerDay(19, 4, 'Iyyar', 'הַיּוֹם תִּשְׁעָה עָשָׂר יוֹם', 'שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וַחֲמִשָּׁה יָמִים', 'ד באייר', 'הַאידַּאנָא תִּשׁעַת עֲשַׂר יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּרֵין שָׁבוּעֵי וְחַמשָׁא יוֹמֵי', 'הוד שבתפארת', '<b>כבבת</b> הוד שבתפארת <b>כלם</b> ת'),
        new OmerDay(20, 5, 'Iyyar', 'הַיּוֹם עֶשְׂרִים יוֹם', 'שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וְשִׁשָּׁה יָמִים', 'ה באייר', 'הַאידַּאנָא עַשׂרִין יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּרֵין שָׁבוּעֵי וְשִׁתָּא יוֹמֵי', 'יסוד שבתפארת', '<b>שמרם</b> יסוד שבתפארת <b>ישמחו</b> ש'),
        new OmerDay(21, 6, 'Iyyar', 'הַיּוֹם אֶחָד וְעֶשְׂרִים יוֹם', 'שֶׁהֵם שְׁלֹשָה שָׁבוּעוֹת', 'ו באייר', 'הַאידַּאנָא עַשׂרִין וְחַד יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי', 'מַלְכוּת שבתפארת', '<b>נג&#34;ד יכ&#34;ש</b> מַלְכוּת שבתפארת <b>וירננו</b> פ'),
        new OmerDay(22, 7, 'Iyyar', 'הַיּוֹם שְׁנַיִם וְעֶשְׂרִים יוֹם', 'שֶׁהֵם שְׁלֹשָה שָׁבוּעוֹת וְיוֹם אֶחָד', 'ז באייר', 'הַאידַּאנָא עַשׂרִין וּתרֵין יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי וְחַד יוֹמָא', 'חסד שבנצח', '<b>ברכם</b> חסד שבנצח <b>לאמים</b> ו'),
        new OmerDay(23, 8, 'Iyyar', 'הַיּוֹם שְׁלֹשָׁה וְעֶשְׂרִים יוֹם', 'שֶׁהֵם שְׁלֹשָה שָׁבוּעוֹת וּשְׁנֵי יָמִים', 'ח באייר', 'הַאידַּאנָא עַשׂרִין וּתלָתָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי וּתרֵין יוֹמֵי', 'גבורה שבנצח', '<b>טהרם</b> גבורה שבנצח <b>כי</b> ט'),
        new OmerDay(24, 9, 'Iyyar', 'הַיּוֹם אַרְבָּעָה וְעֶשְׂרִים יוֹם', 'שֶׁהֵם שְׁלֹשָה שָׁבוּעוֹת וּשְׁלֹשָה יָמִים', 'ט באייר', 'הַאידַּאנָא עַשׂרִין וְאַרבְּעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי וּתלָתָא יוֹמֵי', 'תפארת שבנצח', '<b>רחמי</b> תפארת שבנצח <b>תשפוט</b> ע'),
        new OmerDay(25, 10, 'Iyyar', 'הַיּוֹם חֲמִשָּׁה וְעֶשְׂרִים יוֹם', 'שֶׁהֵם שְׁלֹשָה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים', 'י באייר', 'הַאידַּאנָא עַשׂרִין וְחַמשָׁא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי וְאַרבְּעָא יוֹמֵי', 'נצח שבנצח', '<b>צדקתך</b> נצח שבנצח <b>עמים</b> מ'),
        new OmerDay(26, 11, 'Iyyar', 'הַיּוֹם שִׁשָּׁה וְעֶשְׂרִים יוֹם', 'שֶׁהֵם שְׁלֹשָה שָׁבוּעוֹת וַחֲמִשָּׁה יָמִים', 'י"א באייר', 'הַאידַּאנָא עַשׂרִין וְשִׁתָּא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי וְחַמשָׁא יוֹמֵי', 'הוד שבנצח', '<b>תמיד</b> הוד שבנצח <b>מישור</b> י'),
        new OmerDay(27, 12, 'Iyyar', 'הַיּוֹם שִׁבְעָה וְעֶשְׂרִים יוֹם', 'שֶׁהֵם שְׁלֹשָה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים', 'י"ב באייר', 'הַאידַּאנָא עַשׂרִין וְשִׁבעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן תְּלָתָא שָׁבוּעֵי וְשִׁתָּא יוֹמֵי', 'יסוד שבנצח', '<b>גמלם</b> יסוד שבנצח <b>ולאמים</b> ם'),
        new OmerDay(28, 13, 'Iyyar', 'הַיּוֹם שְׁמוֹנָה וְעֶשְׂרִים יוֹם', 'שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת', 'י"ג באייר', 'הַאידַּאנָא עַשׂרִין וּתמָניָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי', 'מַלְכוּת שבנצח', '<b>בט&#34;ר צת&#34;ג</b> מַלְכוּת שבנצח <b>בארץ</b> מ'),
        new OmerDay(29, 14, 'Iyyar', 'הַיּוֹם תִּשְׁעָה וְעֶשְׂרִים יוֹם', 'שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וְיוֹם אֶחָד', 'י"ד באייר', 'הַאידַּאנָא עַשׂרִין וְתִשׁעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי וְחַד יוֹמָא', 'חסד שבהוד', '<b>חסין</b> חסד שבהוד <b>תנחם</b> י'),
        new OmerDay(30, 15, 'Iyyar', 'הַיּוֹם שְׁלשִׁים יוֹם', 'שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וּשְׁנֵי יָמִים', 'ט"ו באייר', 'הַאידַּאנָא תְּלָתִין יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי וּתרֵין יוֹמֵי', 'גבורה שבהוד', '<b>קדוש</b> גבורה שבהוד <b>סלה</b> ש'),
        new OmerDay(31, 16, 'Iyyar', 'הַיּוֹם אֶחָד וּשְׁלשִׁים יוֹם', 'שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וּשְׁלֹשָה יָמִים', 'ט"ז באייר', 'הַאידַּאנָא תְּלָתִין וְחַד יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי וּתלָתָא יוֹמֵי', 'תפארת שבהוד', '<b>ברב</b> תפארת שבהוד <b>יודוך</b> ו'),
        new OmerDay(32, 17, 'Iyyar', 'הַיּוֹם שְׁנַיִם וּשְׁלשִׁים יוֹם', 'שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים', 'י"ז באייר', 'הַאידַּאנָא תְּלָתִין וּתרֵין יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי וְאַרבְּעָא יוֹמֵי', 'נצח שבהוד', '<b>טובך</b> נצח שבהוד <b>עמים</b> ר'),
        new OmerDay(33, 18, 'Iyyar', 'הַיּוֹם שְׁלֹשָה וּשְׁלשִׁים יוֹם', 'שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וַחֲמִשָּׁה יָמִים', 'י"ח באייר', 'הַאידַּאנָא תְּלָתִין וּתלָתָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי וְחַמשָׁא יוֹמֵי', 'הוד שבהוד', '<b>נהל</b> הוד שבהוד <b>אלהים</b> ו'),
        new OmerDay(34, 19, 'Iyyar', 'הַיּוֹם אַרְבָּעָה וּשְׁלשִׁים יוֹם', 'שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים', 'י"ט באייר', 'הַאידַּאנָא תְּלָתִין וְאַרבְּעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן אַרבְּעָא שָׁבוּעֵי וְשִׁתָּא יוֹמֵי', 'יסוד שבהוד', '<b>עדתך</b> יסוד שבהוד <b>יודוך</b> ל'),
        new OmerDay(35, 20, 'Iyyar', 'הַיּוֹם חֲמִשָּׁה וּשְׁלשִׁים יוֹם', 'שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת', 'כ באייר', 'הַאידַּאנָא תְּלָתִין וְחַמשָׁא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי', 'מַלְכוּת שבהוד', '<b>חק&#34;ב טנ&#34;ע</b> מַלְכוּת שבהוד <b>עמים</b> א'),
        new OmerDay(36, 21, 'Iyyar', 'הַיּוֹם שִׁשָּׁה וּשְׁלשִׁים יוֹם', 'שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְיוֹם אֶחָד', 'כ"א באייר', 'הַאידַּאנָא תְּלָתִין וְשִׁתָּא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי וְחַד יוֹמָא', 'חסד שביסוד', '<b>יחיד</b> חסד שביסוד <b>כלם</b> מ'),
        new OmerDay(37, 22, 'Iyyar', 'הַיּוֹם שִׁבְעָה וּשְׁלשִׁים יוֹם', 'שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וּשְׁנֵי יָמִים', 'כ"ב באייר', 'הַאידַּאנָא תְּלָתִין וְשִׁבעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי וּתרֵין יוֹמֵי', 'גבורה שביסוד', '<b>גאה<b/> גבורה שביסוד <b>ארץ</b> י'),
        new OmerDay(38, 23, 'Iyyar', 'הַיּוֹם שְׁמוֹנָה וּשְׁלשִׁים יוֹם', 'שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וּשְׁלֹשָה יָמִים', 'כ"ג באייר', 'הַאידַּאנָא תְּלָתִין וּתמָניָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי וּתלָתָא יוֹמֵי', 'תפארת שביסוד', '<b>לעמך</b> תפארת שביסוד <b>נתנה</b> ם'),
        new OmerDay(39, 24, 'Iyyar', 'הַיּוֹם תִּשְׁעָה וּשְׁלשִׁים יוֹם', 'שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים', 'כ"ד באייר', 'הַאידַּאנָא תְּלָתִין וְתִשׁעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי וְאַרבְּעָא יוֹמֵי', 'נצח שביסוד', '<b>פנה</b> נצח שביסוד <b>יבולה</b> ב'),
        new OmerDay(40, 25, 'Iyyar', 'הַיּוֹם אַרְבָּעִים יוֹם', 'שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְחֲמִשָּׁה יָמִים', 'כ"ה באייר', 'הַאידַּאנָא אַרבְּעִין יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי וְחַמשָׁא יוֹמֵי', 'הוד שביסוד', '<b>זוכרי</b> הוד שביסוד <b>יברכנו</b> א'),
        new OmerDay(41, 26, 'Iyyar', 'הַיּוֹם אֶחָד וְאַרְבָּעִים יוֹם', 'שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים', 'כ"ו באייר', 'הַאידַּאנָא אַרבְּעִין וְחַד יוֹמֵי בְּעֻמרָא, דְּאִנּוּן חַמשָׁא שָׁבוּעֵי וְשִׁתָּא יוֹמֵי', 'יסוד שביסוד', '<b>קדושתך</b> יסוד שביסוד <b>אלהים</b> ר'),
        new OmerDay(42, 27, 'Iyyar', 'הַיּוֹם שְׁנַיִם וְאַרְבָּעִים יוֹם', 'שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת', 'כ"ז באייר', 'הַאידַּאנָא אַרבְּעִין וּתרֵין יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי', 'מלכות שביסוד', '<b>יג&#34;ל פז&#34;ק</b> מלכות שביסוד <b>אלהינו</b> ץ'),
        new OmerDay(43, 28, 'Iyyar', 'הַיּוֹם שְׁלֹשָה וְאַרְבָּעִים יוֹם', 'שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וְיוֹם אֶחָד', 'כ"ח באייר', 'הַאידַּאנָא אַרבְּעִין וּתלָתָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי וְחַד יוֹמָא', 'חסד שבמלכות', '<b>שועתנו</b> חסד שבמלכות <b>יברכנו</b> ת'),
        new OmerDay(44, 29, 'Iyyar', 'הַיּוֹם אַרְבָּעָה וְאַרְבָּעִים יוֹם', 'שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וּשְׁנֵי יָמִים', 'כ"ט באייר', 'הַאידַּאנָא אַרבְּעִין וְאַרבְּעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי וּתרֵין יוֹמֵי', 'גבורה שבמלכות', '<b>קבל</b> גבורה שבמלכות <b>אלהים</b> נ'),
        new OmerDay(45, 1, 'Sivan', 'הַיּוֹם חֲמִשָּׁה וְאַרְבָּעִים יוֹם', 'שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וּשְׁלֹשָה יָמִים', 'א בסיון', 'הַאידַּאנָא אַרבְּעִין וְחַמשָׁא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי וּתלָתָא יוֹמֵי', 'תפארת שבמלכות', '<b>ושמע</b> תפארת שבמלכות <b>וייראו</b> ח'),
        new OmerDay(46, 2, 'Sivan', 'הַיּוֹם שִׁשָּׁה וְאַרְבָּעִים יוֹם', 'שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים', 'ב בסיון', 'הַאידַּאנָא אַרבְּעִין וְשִׁתָּא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי וְאַרבְּעָא יוֹמֵי', 'נצח שבמלכות', '<b>צעקתנו</b> נצח שבמלכות <b>אותו</b> ם'),
        new OmerDay(47, 3, 'Sivan', 'הַיּוֹם שִׁבְעָה וְאַרְבָּעִים יוֹם', 'שֶׁהֵם שִׁשָּׁה שָבוּעוֹת וַחֲמִשָּׁה יָמִים', 'ג בסיון', 'הַאידַּאנָא אַרבְּעִין וְשִׁבעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי וְחַמשָׁא יוֹמֵי', 'הוד שבמלכות', '<b>יודע</b> הוד שבמלכות <b>כל</b> ס'),
        new OmerDay(48, 4, 'Sivan', 'הַיּוֹם שְׁמוֹנָה וְאַרְבָּעִים יוֹם', 'שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים', 'ד בסיון', 'הַאידַּאנָא אַרבְּעִין וּתמָניָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁתָּא שָׁבוּעֵי וְשִׁתָּא יוֹמֵי', 'יסוד שבמלכות', '<b>תעלומות</b> יסוד שבמלכות <b>אפסי</b> ל'),
        new OmerDay(49, 5, 'Sivan', 'הַיּוֹם תִּשְׁעָה וְאַרְבָּעִים יוֹם', 'שֶׁהֵם שִׁבְעָה שָבוּעוֹת', 'ה בסיון', 'הַאידַּאנָא אַרבְּעִין וְתִשׁעָא יוֹמֵי בְּעֻמרָא, דְּאִנּוּן שִׁבעָא שָׁבוּעֵי שַׁלמֵי', 'מַלְכוּת שבמלכות', '<b>שק&#34;ו צי&#34;ת</b> מַלְכוּת שבמלכות <b>ארץ</b> ה')
    ];

    static readonly edothmizrachStart: string = `לְשֵׁם יִחוּד קוּדְשָׁא בְּרִיךְ הוּא וּשְׁכִינְתֵּיהּ בִּדְחִילוּ וּרְחִימוּ. לְיַחֵדָא שֵׁם יוֹ"ד קֵ"י בְּוָא"ו קֵ"י בְּיִחוּדָא שְׁלִים בְּשֵׁם כָּל יִשְׂרָאֵל הִנֵּה אֲנַחְנוּ בָּאִים לְקַיֵּם מִצְוַת עֲשֵׂה שֶׁל סְפִירַת הָעֹמֶר. כְּדִכְתִיב: וּסְפַרְתֶּם לָכֶם מִמָּחֳרַת הַשַּׁבָּת מִיוֹם הֲבִיאֲכֶם אֶת עֹמֶר הַתְּנוּפָה. שֶׁבַע שַׁבָּתוֹת תְּמִימוֹת תִּהְיֶינָה. עַד מִמָּחֳרַת הַשַּׁבָּת הַשְּׁבִיעִית תִּסְפְּרוּ חֲמִשִּׁים יוֹם. וְהִקְרַבְתֶּם מִנְחָה חֲדָשָׁה לַיהוָה: לְתַקֵּן אֶת שָׁרְשָׁה בְּמָקוֹם עֶלְיוֹן. לַעֲשֹוֹת נַחַת רוּח לְיוֹצְרֵנוּ וְלַעֲשֹוֹת רְצוֹן בּוֹרְאֵנוּ. וִיהִי נוֹעַם אֲדנָי אֱלהֵינוּ עָלֵינוּ. וּמַעֲשֵׂה יָדֵינוּ כּוֹנְנָה עָלֵינוּ. וּמַעֲשֵׂה יָדֵינוּ כּוֹנְנֵהוּ: יְהוָה, יִגְמֹר בַּעֲדִי. יְהוָה, חַסְדְּךָ לְעוֹלָם; מַעֲשֵׂי יָדֶיךָ אַל-תֶּרֶף: אֶקְרָא, לֵאלֹהִים עֶלְיוֹן; לָאֵל, גֹּמֵר עָלָי: וָאֶעֱבֹר עָלַיִךְ וָאֶרְאֵךְ, מִתְבּוֹסֶסֶת בְּדָמָיִךְ; וָאֹמַר לָךְ בְּדָמַיִךְ חֲיִי, וָאֹמַר לָךְ בְּדָמַיִךְ חֲיִי: בָּרְכִי נַפְשִׁי, אֶת-יְהוָה: יְהוָה אֱלֹהַי, גָּדַלְתָּ מְּאֹד; הוֹד וְהָדָר לָבָשְׁתָּ. עֹטֶה-אוֹר, כַּשַּׂלְמָה; נוֹטֶה שָׁמַיִם, כַּיְרִיעָה.`;

    static readonly edothmizrachEnd: string = `אָנָּא בְּכֹחַ גְּדֻלַּת יְמִינְךָ תַּתִּיר צְרוּרָה: קַבֵּל רִנַּת עַמְּךָ שַׂגְּבֵנוּ טַהֲרֵנוּ נוֹרָא: נָא גִבּוֹר דּוֹרְשֵׁי יִחוּדְךָ כְּבָבַת שָׁמְרֵם: בָּרְכֵם טַהֲרֵם רַחֲמֵם צִדְקָתְךָ תָּמִיד גָּמְלֵם: חֲסִין קָדוֹשׁ בְּרֹב טוּבְךָ נַהֵל עֲדָתֶךָ: יָחִיד גֵּאֶה לְעַמְּךָ פְּנֵה זוֹכְרֵי קְדֻשָּׁתֶךָ: שַוְעָתֵנוּ קַבֵּל וּשְׁמַע צַעֲקָתֵנוּ יוֹדֵעַ תַּעֲלֻמוֹת: בָּרוּךְ שֵׁם כְּבוֹד מַלְכוּתוֹ לְעוֹלָם וָעֶד:
<br>
לַמְנַצֵּחַ בִּנְגִינוֹת מִזְמוֹר שִׁיר: אֱלֹהִים יְחָנֵּנוּ וִיבָרְכֵנוּ, יָאֵר פָּנָיו אִתָּנוּ, סֶלָה: לָדַעַת בָּאָרֶץ דַרְכֶּךָ, בְּכָל גּוֹיִם יְשׁוּעָתֶךָ: יוֹדוּךָ עַמִּים אֱלֹהִים, יוֹדוּךָ עַמִּים כֻּלָּם: יִשְׂמְחוּ וִירַנְּנוּ לְאֻמִּים, כִּי תִשְׁפֹּט עַמִּים מִישֹׁר, וּלְאֻמִּים בָּאָרֶץ תַּנְחֵם סֶלָה: יוֹדוּךָ עַמִּים אֱלֹהִים, יוֹדוּךָ עַמִּים כֻּלָּם: אֶרֶץ נָתְנָה יְבוּלָהּ, יְבָרְכֵנוּ אֱלֹהִים אֱלֹהֵינוּ: יְבָרְכֵנוּ אֱלֹהִים, וְיִירְאוּ אוֹתוֹ כָּל אַפְסֵי אָרֶץ:`;

    static readonly lamenteach: string[] = ['לַמְנַצֵּחַ', 'בִּנְגִינוֹת', 'מִזְמוֹר', 'שִׁיר:', 'אֱלֹהִים', 'יְחָנֵּנוּ', 'וִיבָרְכֵנוּ,', 'יָאֵר', 'פָּנָיו', 'אִתָּנוּ,', 'סֶלָה:',
        'לָדַעַת', 'בָּאָרֶץ', 'דַרְכֶּךָ,', 'בְּכָל', 'גּוֹיִם', 'יְשׁוּעָתֶךָ:', 'יוֹדוּךָ', 'עַמִּים', 'אֱלֹהִים,', 'יוֹדוּךָ', 'עַמִּים', 'כֻּלָּם:', 'יִשְׂמְחוּ', 'וִירַנְּנוּ',
        'לְאֻמִּים,', 'כִּי', 'תִשְׁפֹּט', 'עַמִּים', 'מִישֹׁר,', 'וּלְאֻמִּים', 'בָּאָרֶץ', 'תַּנְחֵם', 'סֶלָה:', 'יוֹדוּךָ', 'עַמִּים', 'אֱלֹהִים,', 'יוֹדוּך', 'עַמִּים', 'כֻּלָּם:',
        'אֶרֶץ', 'נָתְנָה', 'יְבוּלָהּ,', 'יְבָרְכֵנוּ', 'אֱלֹהִים', 'אֱלֹהֵינוּ:', 'יְבָרְכֵנוּ', 'אֱלֹהִים,', 'וְיִירְאוּ', 'אוֹתוֹ', 'כָּל', 'אַפְסֵי', 'אָרֶץ:'];

}
