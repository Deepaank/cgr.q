//- JavaScript source code

//- demo.js ~~
//                                                      ~~ (c) SRW, 19 Jan 2013
//                                                  ~~ last updated 28 Feb 2013

(function () {
    'use strict';

 // Pragmas

    /*global QM: false, usm: false */

    /*jslint indent: 4, maxlen: 80, newcap: true */

 // Declarations

    var box, env, f, x;

 // Example 1

    QM.puts(QM.submit(2, '(x) -> x + 2'));

 // Example 2

    QM.puts(QM.map([1, 2, 3, 4, 5], '(x) -> x + 2'));

 // Example 3

    QM.puts(QM.mapreduce([1, 2, 3, 4, 5], '(x) -> 2 * x', '(a, b) -> a + b'));

 // Example 4

    box = 'fasta-demo';

    env = {
        usm: [
         // http://goo.gl/YOa6A -->
            'https://jmat.googlecode.com/git-history/' +
                '122e17249f1033f1086b748ced1f88e61ecfde01/jmat.js',
         // http://git.io/tAeG_w -->
            'https://raw.github.com/usm/usm.github.com/' +
                'b3731f70770a1613e6251c79b249f7f2edcec3bd/usm.js'
        ]
    };

    f = function (url) {
     // This function could also be written in CoffeeScript trivally.
        return new usm(url, 'ACGT').alignQ('TCCACAGCATGCGTGACGATGACACG');
    };

    x = [
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_670_6B_uid52533/NC_014498.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_70585_uid59125/NC_012468.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_AP200_uid52453/NC_014494.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_ATCC_700669_uid59287/NC_011900.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_CGSP14_uid59181/NC_010582.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_D39_uid58581/NC_008533.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_G54_uid59167/NC_011072.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_Hungary19A_6_uid59117/NC_010380.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_INV104_uid162039/NC_017591.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_INV200_uid162035/NC_017593.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_JJA_uid59121/NC_012466.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_OXC141_uid162037/NC_017592.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_P1031_uid59123/NC_012467.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_R6_uid57859/NC_003098.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_SPNA45_uid174986/NC_018594.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_ST556_uid162191/NC_017769.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_TCH8431_19A_uid49735/NC_014251.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_TIGR4_uid57857/NC_003028.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_Taiwan19F_14_uid59119/NC_012469.fna',
        'http://ftp.ncbi.nlm.nih.gov/genomes/Bacteria/' +
            'Streptococcus_pneumoniae_gamPNI0373_uid175861/NC_018630.fna'
    ];

    QM.puts(QM.map(x, f, box, env));

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript:
