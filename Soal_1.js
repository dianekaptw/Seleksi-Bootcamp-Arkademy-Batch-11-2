function getBio(){
    var biodata = {
        "name"      : "Dian Eka Pertiwi",
        "age"       : 22,
        "address"   : "Nambangan Rt 03 Rw 19 Magelang",
        "hobbies"   : ["Writing", "Reading"],
        "is_married": false,
        "list_school": [
            {"name":"SDN Rejowinangun Utara 5 Magelang",
                "year_in":2003,
                "year_out":2009,
                "major":null
            },
            {"name":"SMPN 10 Magelang",
                "year_in":2009,
                "year_out":2012,
                "major":null
            },
            {"name":"SMKN 2 Magelang",
                "year_in":2012,
                "year_out":2015,
                "major":null
            },
            {"name":"Universitas Muhammadiyah Magelang",
                "year_in":2015,
                "year_out":"Coming soon",
                "major":"Teknik Informatika"
            }
        ],
        "skills": [
            {"skill_name":"Java Programming",
                "level":"beginner",
            },
            {"skill_name":"C++ Programming",
                "level":"beginner",
            },
            {"skill_name":"HTML",
                "level":"advance",
            },
            {"skill_name":"PHP MySQL",
                "level":"advance",
            }
        ],
        "interest_in_coding": true
    };
    return JSON.stringify(biodata);
}

print(getBio());
