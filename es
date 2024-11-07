// Modified for a real Spanish keyboard by Jon Tombs.

default partial alphanumeric_keys
xkb_symbols "basic" {

    include "latin(type4)"

    name[Group1]="Spanish";

    key <AE01>	{ [         1,     exclam,          bar,   exclamdown ]	};
    key <AE03>	{ [         3, numbersign, periodcentered,   sterling ]	};
    key <AE04>	{ [         4,     dollar,   asciitilde,       dollar ]	};
    key <AE06>	{ [         6,  ampersand,      notsign,  fiveeighths ]	};
    key <AE11>	{ [apostrophe,   question,    backslash, questiondown ]	};
    key <AE12>	{ [exclamdown, questiondown, dead_tilde,   asciitilde ]	};

    key <AD11>	{ [ bracketleft, dead_abovering, dead_grave, dead_circumflex] };
    key <AD12>	{ [      plus,   asterisk, bracketright,  dead_macron ]	};

    key <AC10>	{ [    ntilde, Ntilde,   asciitilde, dead_doubleacute ]	};
    key <AC11>	{ [dead_acute, dead_diaeresis, braceleft,   braceleft ]	};
    key <TLDE>	{ [ masculine, ordfeminine,    backslash,   backslash ]	};

    key <BKSL>	{ [  ccedilla,   Ccedilla,   braceright,   dead_breve ]	};
    key <BKSL> { [backslash, bar, ccedilla, Ccedilla ] };

    include "level3(ralt_switch)"
};

partial alphanumeric_keys
xkb_symbols "winkeys" {

    include "es(basic)"
    name[Group1]="Spanish (Windows)";
    include "eurosign(5)"
};

partial alphanumeric_keys
xkb_symbols "nodeadkeys" {

    include "es(basic)"

    name[Group1]="Spanish (no dead keys)";

    key <AD11>	{ [     grave, asciicircum,  bracketleft,      degree ]	};
    key <AD12>	{ [      plus,   asterisk, bracketright,       macron ]	};
    key <AC10>	{ [    ntilde,     Ntilde,   asciitilde,  doubleacute ]	};
    key <AC11>	{ [     acute,  diaeresis,    braceleft,    braceleft ]	};
    key <BKSL>	{ [  ccedilla,   Ccedilla,   braceright,        breve ]	};
    key <AB10>	{ [     minus, underscore, dead_belowdot,    abovedot ]	};
};

// Spanish mapping (note R-H exchange)
partial alphanumeric_keys
xkb_symbols "dvorak" {

    name[Group1]="Spanish (Dvorak)";

    key <TLDE> {[  masculine, ordfeminine, backslash, degree		]};
    key <AE01> {[          1, exclam, bar, onesuperior			]};
    key <AE02> {[          2, quotedbl, at, twosuperior			]};
    key <AE03> {[          3, periodcentered, numbersign, threesuperior	]};
    key <AE04> {[          4, dollar, asciitilde, onequarter		]};
    key <AE05> {[          5, percent, brokenbar, fiveeighths		]};
    key <AE06> {[          6, ampersand, notsign, threequarters		]};
    key <AE07> {[          7, slash, onehalf, seveneighths		]};
    key <AE08> {[          8, parenleft, oneeighth, threeeighths	]};
    key <AE09> {[          9, parenright, asciicircum			]};
    key <AE10> {[          0, equal, grave, dead_doubleacute		]};
    key <AE11> {[ apostrophe, question, dead_macron, dead_ogonek	]};
    key <AE12> {[ exclamdown, questiondown, dead_breve, dead_abovedot	]};

    key <AD01> {[     period, colon, less, guillemotleft                ]};
    key <AD02> {[      comma, semicolon, greater, guillemotright        ]};
    key <AD03> {[     ntilde, Ntilde, lstroke, Lstroke			]};
    key <AD04> {[          p, P, paragraph				]};
    key <AD05> {[          y, Y, yen					]};
    key <AD06> {[          f, F, tslash, Tslash				]};
    key <AD07> {[          g, G, dstroke, Dstroke			]};
    key <AD08> {[          c, C, cent, copyright			]};
    key <AD09> {[          h, H, hstroke, Hstroke			]};
    key <AD10> {[          l, L, sterling				]};
    key <AD11> {[ dead_grave, dead_circumflex, bracketleft, dead_caron	]};
    key <AD12> {[       plus, asterisk, bracketright, plusminus		]};

    key <AC01> {[          a, A, ae, AE					]};
    key <AC02> {[          o, O, oslash, Oslash				]};
    key <AC03> {[          e, E, EuroSign				]};
    key <AC04> {[          u, U, aring, Aring				]};
    key <AC05> {[          i, I, oe, OE					]};
    key <AC06> {[          d, D, eth, ETH				]};
    key <AC07> {[          r, R, registered, trademark			]};
    key <AC08> {[          t, T, thorn, THORN				]};
    key <AC09> {[          n, N, eng, ENG				]};
    key <AC10> {[          s, S, ssharp, section			]};
    key <AC11> {[ dead_acute, dead_diaeresis, braceleft, dead_tilde	]};
    key <BKSL> {[   ccedilla, Ccedilla, braceright, dead_cedilla	]};

    key <LSGT> {[       less, greater, guillemotleft, guillemotright	]};
    key <AB01> {[      minus, underscore, hyphen, macron		]};
    key <AB02> {[          q, Q, currency				]};
    key <AB03> {[          j, J						]};
    key <AB04> {[          k, K, kra					]};
    key <AB05> {[          x, X, multiply, division			]};
    key <AB06> {[          b, B						]};
    key <AB07> {[          m, M, mu					]};
    key <AB08> {[          w, W						]};
    key <AB09> {[          v, V						]};
    key <AB10> {[          z, Z						]};

    include "level3(ralt_switch)"
};

// partial alphanumeric_keys
// xkb_symbols "cat" {
// 
//     include "es(basic)"
// 
//     name[Group1]="Catalan (Spain, with middle-dot L)";
// 
//     key <AC09>  { [	    l,      L,		0x1000140,  0x100013F ] };
// };

// personal
partial alphanumeric_keys
xkb_symbols "cat" {

    name[Group1]= "Catalan (Spain, with middle-dot L)";

    key <TLDE> {[     grave,	asciitilde, ntilde, Ntilde ]};
    key <AE01> {[	  1,	exclam, exclamdown, dead_key ]};
    key <AE02> {[	  2,	at, questiondown, dead_key ]};
    key <AE03> {[	  3,	numbersign, periodcentered, dead_key ]};
    key <AE04> {[	  4,	dollar, sterling, dead_key ]};
    key <AE05> {[	  5,	percent, dead_key, dead_key ]};
    key <AE06> {[	  6,	asciicircum, dead_key, dead_key ]};
    key <AE07> {[	  7,	ampersand, dead_key, dead_key ]};
    key <AE08> {[	  8,	asterisk, dead_key, dead_key ]};
    key <AE09> {[	  9,	parenleft, dead_key, dead_key ]};
    key <AE10> {[	  0,	parenright, dead_key, dead_key ]};
    key <AE11> {[     minus,	underscore, dead_key, dead_key ]};
    key <AE12> {[     equal,	plus, dead_key, dead_key ]};

    key <AD01> {[	  p,	P, dead_key, dead_key ]};
    key <AD02> {[	  l,	L, 7, ampersand ]};
    key <AD03> {[	  w,	W, 8, asterisk ]};
    key <AD04> {[	  m,	M, 9, parenright ]};
    key <AD05> {[	  g,	G, minus, dead_key ]};
    key <AD06> {[	  z,	Z, dead_key, dead_key ]};
    key <AD07> {[	  f,	F, dead_key, dead_key ]};
    key <AD08> {[	  o,	O, dead_key, dead_key ]};
    key <AD09> {[	  u,	U, dead_key, dead_key ]};
    key <AD10> {[ apostrophe,	quotedbl, dead_key, dead_key ]};
    key <AD11> {[ dead_grave,	braceleft, bracketleft, dead_key ]};
    key <AD12> {[ dead_diaeresis, braceright, bracketright, dead_key ]};

    key <AC01> {[	  y,	Y, 0, parenleft ]};
    key <AC02> {[	  r,	R, 4, dollar ]};
    key <AC03> {[	  s,	S, 5, percent ]};
    key <AC04> {[	  t,	T, 6, asciicircum ]};
    key <AC05> {[	  k,	K, plus, dead_key ]};
    key <AC06> {[	  j,	J, dead_key, dead_key ]};
    key <AC07> {[	  n,	N, dead_key, dead_key ]};
    key <AC08> {[	  a,	A, dead_key, dead_key ]};
    key <AC09> {[	  e,	E, dead_key, dead_key ]};
    key <AC10> {[	  i,	I, dead_key, dead_key ]};
    key <AC11> {[dead_acute, question, slash, dead_key]};

    key <AB01> {[	  q,	Q, dead_key, dead_key ]};
    key <AB02> {[	  x,	X, 1, exclam ]};
    key <AB03> {[	  c,	C, 2, at ]};
    key <AB04> {[	  d,	D, 3, numbersign ]};
    key <AB05> {[	  v,	V, equal, dead_key ]};
    key <AB06> {[	  b,	B, dead_key, dead_key ]};
    key <AB07> {[	  h,	H, dead_key, dead_key ]};
    key <AB08> {[     comma,	less   , dead_key, dead_key ]};
    key <AB09> {[ semicolon,	colon  , dead_key, dead_key ]};
    key <AB10> {[    period,	greater, dead_key, dead_key ]};

    key <BKSL> {[ backslash,	bar, ccedilla, Ccedilla ]};
    key <CAPS> {[    escape,    escape, escape, escape ]};

    include "level3(ralt_switch)"
    include "eurosign(5)"
};


partial alphanumeric_keys
xkb_symbols "ast" {

    include "es(basic)"

    name[Group1]="Asturian (Spain, with bottom-dot H and L)";

    key <AC06>  { [	    h,      H,		0x1001E25,  0x1001E24 ] };
    key <AC09>  { [	    l,      L,		0x1001E37,  0x1001E36 ] };
};

// Copied from macintosh_vndr/es
partial alphanumeric_keys
xkb_symbols "mac" {
    include "es"
    name[Group1]= "Spanish (Macintosh)";
};

partial alphanumeric_keys
xkb_symbols "olpc" {

    // http://wiki.laptop.org/go/OLPC_Spanish_Keyboard

    include "us(basic)"
    name[Group1]="Spanish";

    key <AE00> { [    masculine,    ordfeminine      ] };
    key <AE01> { [            1,         exclam,             bar ] };
    key <AE02> { [            2,       quotedbl,              at ] };
    key <AE03> { [            3,     dead_grave,      numbersign,   grave           ] };
    key <AE05> { [            5,        percent,     asciicircum,   dead_circumflex ] };
    key <AE06> { [            6,      ampersand,         notsign ] };
    key <AE07> { [            7,          slash,       backslash ] };
    key <AE08> { [            8,      parenleft                         ] };
    key <AE09> { [            9,     parenright                         ] };
    key <AE10> { [            0,          equal                  ] };
    key <AE11> { [   apostrophe,       question                  ] };
    key <AE12> { [   exclamdown,   questiondown                  ] };

    key <AD03> { [            e,              E,        EuroSign ] };
    key <AD11> { [   dead_acute, dead_diaeresis,           acute,   dead_abovering  ] };
    key <AD12> { [  bracketleft,      braceleft                  ] };

    key <AC10> { [       ntilde,        Ntilde                  ] };
    key <AC11> { [         plus,       asterisk,      dead_tilde ] };
    key <AC12> { [ bracketright,     braceright,      section    ] };

    key <AB08> { [        comma,      semicolon                  ] };
    key <AB09> { [       period,          colon                  ] };
    key <AB10> { [        minus,     underscore                  ] };

    key <I219> { [         less,        greater,  ISO_Next_Group ] };

    include "level3(ralt_switch)"
};

partial alphanumeric_keys
xkb_symbols "olpcm" {

    // Mechanical (non-membrane) OLPC Spanish keyboard layout.
    // See: http://wiki.laptop.org/go/OLPC_Spanish_Non-membrane_Keyboard

    include "us(basic)"
    name[Group1]="Spanish";

    key <AE00> { [    questiondown,    exclamdown, backslash      ] };
    key <AE01> { [            1,         exclam,             bar ] };
    key <AE02> { [            2,       quotedbl,              at ] };
    key <AE03> { [            3,     dead_grave,      numbersign,   grave           ] };
    key <AE04> { [            4,     dollar,     asciitilde,     dead_tilde ] };
    key <AE05> { [            5,        percent,     asciicircum,   dead_circumflex ] };
    key <AE06> { [            6,      ampersand,         notsign ] };
    key <AE07> { [            7,          slash,       backslash ] };   // no '\' label on olpcm, leave for compatibility
    key <AE08> { [            8,      parenleft,    masculine                ] };
    key <AE09> { [            9,     parenright,    ordfeminine                 ] };
    key <AE10> { [            0,          equal                  ] };
    key <AE11> { [   apostrophe,       question                  ] };

    key <AD03> { [            e,              E,        EuroSign ] };
    key <AD11> { [   dead_acute, dead_diaeresis,     dead_abovering, acute  ] };
    key <AD12> { [  plus,      asterisk                  ] };

    key <AC10> { [       ntilde,        Ntilde                  ] };
    // no AC11 or AC12 on olpcm

    key <AB08> { [        comma,      semicolon                  ] };
    key <AB09> { [       period,          colon                  ] };
    key <AB10> { [        minus,     underscore                  ] };

    key <AA02>  { [        less,        greater ] };
    key <AA06>  { [  bracketleft,      braceleft,   ccedilla,         Ccedilla  ] };
    key <AA07>  { [  bracketright,     braceright                ] };

    include "level3(ralt_switch)"
};

partial alphanumeric_keys
xkb_symbols "deadtilde" {

    include "es(basic)"

    name[Group1]="Spanish (dead tilde)";

    key <AE04>	{ [         4,     dollar,   dead_tilde,       dollar ]	};
};

partial alphanumeric_keys
xkb_symbols "olpc2" {

    // Modified variant of US International layout, specifically for Peru
    // Contact: Sayamindu Dasgupta <sayamindu@laptop.org>

    include "us(olpc)"
    name[Group1]="Spanish (OLPC2)";

    key <AE03> { [  3, numbersign,   dead_grave,  dead_grave] }; // combining grave
    key <I236>  { [ XF86Start ] };

    include "level3(ralt_switch)"
};

// EXTRAS:

partial alphanumeric_keys
	xkb_symbols "sun_type6" {
	include "sun_vndr/es(sun_type6)"
};
