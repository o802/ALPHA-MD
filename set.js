const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61WyY6rSBb9lVZs7VfJYCZLKTVgsME2Bg/podSLMAQ4sBkcEdiJn7ysT8je5R907WrTi1L9Un5CiXSmXkpV9SpbalahIDj33HvPPcFXkBeYoiGqQfcrKAk+QYaaJatLBLrAqOIYEdAGEWQQdAGcnDxjmywmbs/pl6WUw5HHViu6GIZLaKQXmETJxEmH3PJ8D65tUFbbAw6/A8jPgrFxOfv8JJunAlRMVrtpkhmEZKG5cMLdctk3Pc/emcU9uDaIEBOcJ1a5Qxki8DBEtQ8x+Rz98yDmHG81Naa6WW8250rRHEzv4qm3NZU7PXNbtp/beK0MnM/R9/odexicOvlGvMhV3WIJMYI0WFeBmDhZfyfTyzRPWr6fhTf6FCc5ipwI5Qyz+tN1n1jGbDDdrBx3MVcHwhmNl6bGLsMjXZd5H8VeGkjeUk56i0/WfRWE/ig4dc6FLKyDM4onbD4QVX9tn+/cMOX5Inzcb/YPrYH1kbhP3rWy/1/qXo9KmLmxxccLFwfLu4saj1EkSquZf7SN5CCzSziP1i0sJp+j7xyLEO+WXk5UdpJEJO4OdNbrm4PAfTSsAbcaqg+nlZ9u9h/qDllFvseSxYs+qbdaMk4htUJXf4xdcXj057t9QBalcCJpS11elJWq8CqnCydRSAdkEkdLVBPxsSVXWhCqVtkiD9Q0bPOoaGHvfP+a0R7VTgS6/LUNCEowZQQyXOSvexLfBjA6zVBIEHstL3g4XDLltHZqO53S2OvptGrxVlw6oYanu1WfSEhNLhVznOAetEFJihBRiqIBpqwg9RhRChNEQffH1041SROUFQy5OAJdIIgdhRNkXlRFtfNP+sN5BxmFZflDjhhog5gU2RiBLiMVaoPXLxTNtiRTUnuaYZg2p3M2r1u8LsuGbFmGbjY5Zreoc5whymBWgi6vdCSpw3Mif23/n4j0FFNXRL2jmrYgWpotCZxha7ykqqKtqKL0N0Sk67/aIEeP7Kbkpv4i3wYxJpQt8qo8FDB6l/n7SxiGRZWzWZ2HZrNABHQ/bCPGcJ7QJrUqhyTc4RMymzxAN4YHiq5tEKETDlGDB6brh52Kd4N5Ptspto0v/oqdk6aHuyK/HdkqscYrMfqidGT4pRNL2hcYCcqXcMttZVkTIxUh0JTjZiLNN3+paWm/macO6uUDb0RQn+6rojcrhMR/HL/q8iZGRFD0XuUtDPdVOS/2KP8OLqksAULehWtvxu2drRE6B8Guqpn6EfcmctD9+s24zSJq8AautNYlwQdNt5o4f5RDV1T+qIgcNsfBy/PTLy/PT7+9PP/7p3+8PD/9/PL89Ovb5n9enp/+23B4a1CDHiEG8YGCLjA96HPlfmA5+HRU9X7foIluJjr41tB3q7iNorCw47hV5ESqx+vNpE4nxXwuoHDmzc7qRcBnVRpPMt2lunX/JyCN+2l0mo0u5gMdCJtRbu+NI+Kd0p+t7lYte8rb/uSysSZpb/x45pVdZm6DdJbDQ2s+86ZWpHkPsgHdxcTktEhlB1d8TKY9/b6JdhPWx2DWRK+coBYuW3s8l5Z+OeLGZ9SfYF7l4F2g9LxN4WULlfVwFOs4pat6Lo+W2B3fVZbt9jqGPBjB5UhFOVnY8qFDF7aZ3Ezs1UQPb5cXfrOXmwxjjF7vgrf+/H0jv40Ed21/AHm7Xv5CdkZ0MFbi3dGVW2Ha789pcTlanJbnVrqg/lgrqD+Z98rE3OoGuDazXh4giwuSNT8veUQKHIE2OEDK9G9T/SdGwQttkNV6Wc4YZO9mAPTmGRodcP0dgK1uCzkJAAA=',
    PREFIXE: process.env.PREFIX || ",",
    OWNER_NAME: process.env.OWNER_NAME || "𝕴𝕿𝖅 𝕭𝕽𝕴𝕬𝕹",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "2347026138384",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',    
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'yes',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'yes',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;
