// Drug database with detailed information for all medications
const drugDatabase = {

    "Lisinopril": {
        class: "ACE Inhibitor",
        brandNames: "Zestril, Prinivil, Qbrelis",
        administration: "Oral",
        halfLife: "12 hours",
        uses: "Lisinopril is used to treat high blood pressure (hypertension), heart failure, and to improve survival after a heart attack.",
        dosage: "For hypertension: Initial dose 10 mg once daily. Maintenance dose 20-40 mg once daily. Maximum dose 80 mg/day.",
        sideEffects: [
            "Dizziness or lightheadedness",
            "Persistent dry cough",
            "Headache",
            "Fatigue",
            "Nausea"
        ],
        interactions: [
            { drug: "Diuretics", level: "high", description: "May cause excessive blood pressure lowering" },
            { drug: "NSAIDs", level: "medium", description: "May reduce antihypertensive effect" },
            { drug: "Lithium", level: "high", description: "May increase lithium levels" },
            { drug: "Potassium supplements", level: "medium", description: "May increase risk of hyperkalemia" }
        ],
        safety: "Do not use during pregnancy. May cause injury or death to the unborn baby. Avoid in patients with history of angioedema."
    },
    "Losartan": {
        class: "Angiotensin II Receptor Blocker (ARB)",
        brandNames: "Cozaar",
        administration: "Oral",
        halfLife: "6-9 hours",
        uses: "Losartan is used to treat high blood pressure (hypertension) and to protect the kidneys from damage due to diabetes.",
        dosage: "For hypertension: Initial dose 50 mg once daily. Can be increased to 100 mg once daily. For diabetic nephropathy: 50-100 mg once daily.",
        sideEffects: [
            "Dizziness",
            "Upper respiratory infection",
            "Back pain",
            "Low blood pressure",
            "Increased potassium levels"
        ],
        interactions: [
            { drug: "Potassium-sparing diuretics", level: "high", description: "Increased risk of hyperkalemia" },
            { drug: "NSAIDs", level: "medium", description: "May reduce antihypertensive effect" },
            { drug: "Lithium", level: "high", description: "May increase lithium levels" }
        ],
        safety: "Do not use during pregnancy. May cause injury or death to the unborn baby. Use with caution in patients with renal impairment."
    },
    "Amlodipine": {
        class: "Calcium Channel Blocker",
        brandNames: "Norvasc",
        administration: "Oral",
        halfLife: "30-50 hours",
        uses: "Amlodipine is used to treat high blood pressure and chest pain (angina).",
        dosage: "For hypertension: Initial dose 5 mg once daily. Maximum dose 10 mg once daily. For angina: 5-10 mg once daily.",
        sideEffects: [
            "Swelling of ankles or feet",
            "Dizziness",
            "Flushing",
            "Headache",
            "Fatigue",
            "Nausea"
        ],
        interactions: [
            { drug: "Simvastatin", level: "medium", description: "May increase simvastatin levels" },
            { drug: "Cyclosporine", level: "medium", description: "May increase cyclosporine levels" }
        ],
        safety: "Use with caution in patients with severe aortic stenosis. May cause hypotension, especially when starting therapy."
    },
    "Atenolol": {
        class: "Beta Blocker",
        brandNames: "Tenormin",
        administration: "Oral",
        halfLife: "6-7 hours",
        uses: "Atenolol is used to treat high blood pressure, angina, and to reduce the risk of death after a heart attack.",
        dosage: "For hypertension: 25-100 mg once daily. For angina: 50-100 mg once daily. Maximum dose 100 mg/day.",
        sideEffects: [
            "Fatigue",
            "Dizziness",
            "Cold hands and feet",
            "Depression",
            "Shortness of breath",
            "Bradycardia"
        ],
        interactions: [
            { drug: "Calcium channel blockers", level: "high", description: "Increased risk of bradycardia and heart block" },
            { drug: "Insulin", level: "medium", description: "May mask symptoms of hypoglycemia" },
            { drug: "Clonidine", level: "high", description: "Risk of severe rebound hypertension if discontinued together" }
        ],
        safety: "Do not abruptly discontinue. May exacerbate heart failure in susceptible patients. Use with caution in patients with asthma or COPD."
    },
    "Metoprolol": {
        class: "Beta Blocker",
        brandNames: "Lopressor, Toprol XL",
        administration: "Oral",
        halfLife: "3-7 hours",
        uses: "Metoprolol is used to treat high blood pressure, chest pain (angina), and heart failure, and to improve survival after a heart attack.",
        dosage: "For hypertension: 50-100 mg once or twice daily. Maximum dose 450 mg/day. Extended-release: 25-400 mg once daily.",
        sideEffects: [
            "Tiredness",
            "Dizziness",
            "Depression",
            "Shortness of breath",
            "Bradycardia",
            "Cold hands and feet"
        ],
        interactions: [
            { drug: "Other beta blockers", level: "high", description: "Additive effects on heart rate and blood pressure" },
            { drug: "Calcium channel blockers", level: "high", description: "Increased risk of bradycardia and heart block" },
            { drug: "Digoxin", level: "medium", description: "Additive effects on heart rate" }
        ],
        safety: "Do not abruptly discontinue. Use with caution in patients with asthma, diabetes, or heart failure."
    },
    "Enalapril": {
        class: "ACE Inhibitor",
        brandNames: "Vasotec",
        administration: "Oral",
        halfLife: "11 hours",
        uses: "Enalapril is used to treat high blood pressure, heart failure, and to improve survival after a heart attack.",
        dosage: "For hypertension: 5-40 mg daily in 1-2 divided doses. For heart failure: 2.5-20 mg twice daily.",
        sideEffects: [
            "Dizziness",
            "Cough",
            "Headache",
            "Fatigue",
            "Nausea",
            "Hyperkalemia"
        ],
        interactions: [
            { drug: "Diuretics", level: "high", description: "Risk of first-dose hypotension" },
            { drug: "Lithium", level: "high", description: "Increased lithium levels" },
            { drug: "NSAIDs", level: "medium", description: "May reduce antihypertensive effect" }
        ],
        safety: "Contraindicated in pregnancy. Monitor renal function and potassium levels regularly."
    },
    "Captopril": {
        class: "ACE Inhibitor",
        brandNames: "Capoten",
        administration: "Oral",
        halfLife: "2 hours",
        uses: "Captopril is used to treat high blood pressure, heart failure, and to improve survival after a heart attack.",
        dosage: "For hypertension: 25-150 mg two or three times daily. For heart failure: 6.25-50 mg three times daily.",
        sideEffects: [
            "Cough",
            "Dizziness",
            "Taste disturbance",
            "Rash",
            "Hypotension",
            "Hyperkalemia"
        ],
        interactions: [
            { drug: "Diuretics", level: "high", description: "Risk of severe hypotension" },
            { drug: "Lithium", level: "high", description: "Increased lithium levels" },
            { drug: "NSAIDs", level: "medium", description: "Reduced antihypertensive effect" }
        ],
        safety: "Take on empty stomach. Monitor for angioedema, especially with first dose."
    },
    "Ramipril": {
        class: "ACE Inhibitor",
        brandNames: "Altace",
        administration: "Oral",
        halfLife: "13-17 hours",
        uses: "Ramipril is used to treat high blood pressure, reduce risk of heart attack and stroke in high-risk patients, and treat heart failure.",
        dosage: "For hypertension: 2.5-10 mg once daily. For cardiovascular risk reduction: 2.5-10 mg once daily.",
        sideEffects: [
            "Cough",
            "Dizziness",
            "Headache",
            "Fatigue",
            "Nausea",
            "Hypotension"
        ],
        interactions: [
            { drug: "Diuretics", level: "high", description: "Risk of severe hypotension" },
            { drug: "Lithium", level: "high", description: "Increased lithium levels" },
            { drug: "Potassium supplements", level: "medium", description: "Increased risk of hyperkalemia" }
        ],
        safety: "Contraindicated in pregnancy. Monitor renal function and electrolytes regularly."
    },
    "Valsartan": {
        class: "Angiotensin II Receptor Blocker (ARB)",
        brandNames: "Diovan",
        administration: "Oral",
        halfLife: "6 hours",
        uses: "Valsartan is used to treat high blood pressure, heart failure, and to improve survival after a heart attack.",
        dosage: "For hypertension: 80-320 mg once daily. For heart failure: 40-160 mg twice daily.",
        sideEffects: [
            "Dizziness",
            "Viral infection",
            "Fatigue",
            "Abdominal pain",
            "Hyperkalemia"
        ],
        interactions: [
            { drug: "Potassium-sparing diuretics", level: "high", description: "Increased risk of hyperkalemia" },
            { drug: "NSAIDs", level: "medium", description: "May reduce antihypertensive effect" },
            { drug: "Lithium", level: "high", description: "Increased lithium levels" }
        ],
        safety: "Contraindicated in pregnancy. Use with caution in patients with renal impairment or renal artery stenosis."
    },
    "Irbesartan": {
        class: "Angiotensin II Receptor Blocker (ARB)",
        brandNames: "Avapro",
        administration: "Oral",
        halfLife: "11-15 hours",
        uses: "Irbesartan is used to treat high blood pressure and to protect kidney function in patients with type 2 diabetes and hypertension.",
        dosage: "For hypertension: 150-300 mg once daily. For nephropathy: 300 mg once daily.",
        sideEffects: [
            "Dizziness",
            "Muscle pain",
            "Heartburn",
            "Diarrhea",
            "Upper respiratory infection"
        ],
        interactions: [
            { drug: "Potassium supplements", level: "high", description: "Increased risk of hyperkalemia" },
            { drug: "NSAIDs", level: "medium", description: "May reduce antihypertensive effect" },
            { drug: "Lithium", level: "high", description: "Increased lithium levels" }
        ],
        safety: "Contraindicated in pregnancy. Monitor renal function and potassium levels in patients with renal impairment."
    },
    "Telmisartan": {
        class: "Angiotensin II Receptor Blocker (ARB)",
        brandNames: "Micardis",
        administration: "Oral",
        halfLife: "24 hours",
        uses: "Telmisartan is used to treat high blood pressure and to reduce cardiovascular risk in patients unable to take ACE inhibitors.",
        dosage: "20-80 mg once daily. Most patients start with 40 mg once daily.",
        sideEffects: [
            "Upper respiratory infection",
            "Back pain",
            "Sinusitis",
            "Diarrhea",
            "Pharyngitis"
        ],
        interactions: [
            { drug: "Digoxin", level: "medium", description: "May increase digoxin levels" },
            { drug: "Lithium", level: "high", description: "Increased lithium levels" },
            { drug: "NSAIDs", level: "medium", description: "May reduce antihypertensive effect" }
        ],
        safety: "Contraindicated in pregnancy. Use with caution in patients with biliary obstruction disorders."
    },
    "Carvedilol": {
        class: "Alpha/Beta Blocker",
        brandNames: "Coreg",
        administration: "Oral",
        halfLife: "7-10 hours",
        uses: "Carvedilol is used to treat high blood pressure, heart failure, and to improve survival after a heart attack.",
        dosage: "For hypertension: 6.25-25 mg twice daily. For heart failure: 3.125-25 mg twice daily.",
        sideEffects: [
            "Dizziness",
            "Fatigue",
            "Weight gain",
            "Bradycardia",
            "Diarrhea",
            "Hyperglycemia"
        ],
        interactions: [
            { drug: "Clonidine", level: "high", description: "Risk of severe rebound hypertension" },
            { drug: "Cyclosporine", level: "medium", description: "Increased cyclosporine levels" },
            { drug: "Insulin", level: "medium", description: "May mask hypoglycemia symptoms" }
        ],
        safety: "Do not abruptly discontinue. Use with caution in patients with asthma, diabetes, or liver disease."
    },
    "Bisoprolol": {
        class: "Beta Blocker",
        brandNames: "Zebeta",
        administration: "Oral",
        halfLife: "9-12 hours",
        uses: "Bisoprolol is used to treat high blood pressure. It may be used alone or in combination with other antihypertensive agents.",
        dosage: "2.5-10 mg once daily. Maximum dose 20 mg once daily. Start with 2.5-5 mg once daily.",
        sideEffects: [
            "Headache",
            "Dizziness",
            "Fatigue",
            "Diarrhea",
            "Bradycardia",
            "Cold extremities"
        ],
        interactions: [
            { drug: "Calcium channel blockers", level: "high", description: "Increased risk of bradycardia" },
            { drug: "Clonidine", level: "high", description: "Risk of rebound hypertension" },
            { drug: "Insulin", level: "medium", description: "May mask hypoglycemia symptoms" }
        ],
        safety: "Do not abruptly discontinue. Use with caution in patients with bronchospastic disease, diabetes, or thyrotoxicosis."
    },
    "Diltiazem": {
        class: "Calcium Channel Blocker",
        brandNames: "Cardizem, Tiazac",
        administration: "Oral",
        halfLife: "3-4.5 hours",
        uses: "Diltiazem is used to treat high blood pressure, chronic stable angina, and atrial arrhythmias.",
        dosage: "For hypertension: 120-360 mg daily in divided doses. Extended-release: 180-480 mg once daily.",
        sideEffects: [
            "Headache",
            "Dizziness",
            "Edema",
            "Flushing",
            "Nausea",
            "Bradycardia"
        ],
        interactions: [
            { drug: "Beta blockers", level: "high", description: "Increased risk of bradycardia and heart block" },
            { drug: "Statins", level: "medium", description: "May increase statin levels" },
            { drug: "Cyclosporine", level: "medium", description: "Increased cyclosporine levels" }
        ],
        safety: "Use with caution in patients with heart failure, liver impairment, or conduction abnormalities."
    },
    "Verapamil": {
        class: "Calcium Channel Blocker",
        brandNames: "Calan, Verelan",
        administration: "Oral",
        halfLife: "2.8-7.4 hours",
        uses: "Verapamil is used to treat high blood pressure, angina, and certain heart rhythm disorders.",
        dosage: "For hypertension: 80-480 mg daily in divided doses. Extended-release: 120-480 mg once daily.",
        sideEffects: [
            "Constipation",
            "Dizziness",
            "Headache",
            "Nausea",
            "Edema",
            "Bradycardia"
        ],
        interactions: [
            { drug: "Beta blockers", level: "high", description: "Increased risk of bradycardia and heart block" },
            { drug: "Digoxin", level: "high", description: "Increased digoxin levels" },
            { drug: "Statins", level: "medium", description: "May increase statin levels" }
        ],
        safety: "Contraindicated in severe left ventricular dysfunction, sick sinus syndrome, and 2nd/3rd degree AV block."
    },
    "Hydrochlorothiazide": {
        class: "Thiazide Diuretic",
        brandNames: "Microzide, Esidrix",
        administration: "Oral",
        halfLife: "5.6-14.8 hours",
        uses: "Hydrochlorothiazide is used to treat high blood pressure and edema associated with heart failure, liver cirrhosis, and renal disease.",
        dosage: "For hypertension: 12.5-50 mg once daily. For edema: 25-100 mg daily in 1-2 divided doses.",
        sideEffects: [
            "Dizziness",
            "Headache",
            "Increased urination",
            "Electrolyte imbalance",
            "Photosensitivity",
            "Gout"
        ],
        interactions: [
            { drug: "Lithium", level: "high", description: "Increased lithium levels" },
            { drug: "NSAIDs", level: "medium", description: "May reduce diuretic effect" },
            { drug: "Corticosteroids", level: "medium", description: "Increased potassium loss" }
        ],
        safety: "Monitor electrolytes regularly. Use with caution in patients with renal impairment, diabetes, or gout."
    },
    "Chlorthalidone": {
        class: "Thiazide-like Diuretic",
        brandNames: "Thalitone",
        administration: "Oral",
        halfLife: "40-60 hours",
        uses: "Chlorthalidone is used to treat high blood pressure and edema associated with heart failure, renal disease, or liver cirrhosis.",
        dosage: "12.5-50 mg once daily. Usually started at 12.5-25 mg once daily.",
        sideEffects: [
            "Dizziness",
            "Weakness",
            "Muscle cramps",
            "Electrolyte imbalance",
            "Impotence",
            "Photosensitivity"
        ],
        interactions: [
            { drug: "Lithium", level: "high", description: "Increased lithium levels" },
            { drug: "Digoxin", level: "medium", description: "Increased risk of digoxin toxicity with hypokalemia" },
            { drug: "NSAIDs", level: "medium", description: "May reduce diuretic effect" }
        ],
        safety: "Monitor electrolytes, particularly potassium, regularly. Use with caution in patients with renal or hepatic impairment."
    },
    "Furosemide": {
        class: "Loop Diuretic",
        brandNames: "Lasix",
        administration: "Oral, IV",
        halfLife: "2 hours",
        uses: "Furosemide is used to treat edema associated with heart failure, liver cirrhosis, and renal disease, including nephrotic syndrome.",
        dosage: "For edema: 20-80 mg once or twice daily. Maximum dose 600 mg/day. IV: 20-40 mg.",
        sideEffects: [
            "Dehydration",
            "Electrolyte imbalance",
            "Dizziness",
            "Hearing loss (high doses)",
            "Photosensitivity",
            "Ototoxicity"
        ],
        interactions: [
            { drug: "Aminoglycosides", level: "high", description: "Increased risk of ototoxicity" },
            { drug: "Lithium", level: "high", description: "Increased lithium levels" },
            { drug: "NSAIDs", level: "medium", description: "May reduce diuretic effect" }
        ],
        safety: "Monitor electrolytes and renal function regularly. Use with caution in patients with renal impairment or hearing disorders."
    },
    "Spironolactone": {
        class: "Potassium-Sparing Diuretic",
        brandNames: "Aldactone",
        administration: "Oral",
        halfLife: "1.4 hours",
        uses: "Spironolactone is used to treat high blood pressure, edema associated with heart failure or liver cirrhosis, and primary hyperaldosteronism.",
        dosage: "For hypertension: 50-100 mg daily in 1-2 divided doses. For edema: 100-400 mg daily.",
        sideEffects: [
            "Hyperkalemia",
            "Gynecomastia (men)",
            "Menstrual irregularities (women)",
            "Drowsiness",
            "Diarrhea",
            "Headache"
        ],
        interactions: [
            { drug: "ACE inhibitors", level: "high", description: "Increased risk of hyperkalemia" },
            { drug: "NSAIDs", level: "medium", description: "Increased risk of renal impairment" },
            { drug: "Digoxin", level: "medium", description: "May interfere with digoxin assays" }
        ],
        safety: "Contraindicated in patients with hyperkalemia, acute renal failure, or anuria. Monitor potassium levels regularly."
    },
    "Eplerenone": {
        class: "Potassium-Sparing Diuretic",
        brandNames: "Inspra",
        administration: "Oral",
        halfLife: "4-6 hours",
        uses: "Eplerenone is used to treat high blood pressure and to improve survival in patients with heart failure after a heart attack.",
        dosage: "For hypertension: 50-100 mg once daily. For heart failure: 25-50 mg once daily.",
        sideEffects: [
            "Hyperkalemia",
            "Dizziness",
            "Fatigue",
            "Diarrhea",
            "Cough",
            "Abdominal pain"
        ],
        interactions: [
            { drug: "ACE inhibitors", level: "high", description: "Increased risk of hyperkalemia" },
            { drug: "Potassium supplements", level: "high", description: "Increased risk of hyperkalemia" },
            { drug: "Strong CYP3A4 inhibitors", level: "high", description: "Increased eplerenone levels" }
        ],
        safety: "Contraindicated in patients with hyperkalemia, renal impairment, or type 2 diabetes with microalbuminuria. Monitor potassium regularly."
    },
    "Clonidine": {
        class: "Central Alpha-2 Agonist",
        brandNames: "Catapres",
        administration: "Oral, Transdermal",
        halfLife: "12-16 hours",
        uses: "Clonidine is used to treat high blood pressure. It may also be used for ADHD, menopausal flushing, and opioid withdrawal.",
        dosage: "For hypertension: 0.1-0.8 mg daily in divided doses. Transdermal: applied weekly.",
        sideEffects: [
            "Dry mouth",
            "Drowsiness",
            "Dizziness",
            "Constipation",
            "Sedation",
            "Rebound hypertension"
        ],
        interactions: [
            { drug: "Beta blockers", level: "high", description: "Risk of severe rebound hypertension" },
            { drug: "TCAs", level: "medium", description: "May reduce antihypertensive effect" },
            { drug: "CNS depressants", level: "medium", description: "Additive sedative effects" }
        ],
        safety: "Do not abruptly discontinue. Taper gradually over 2-4 days to avoid rebound hypertension."
    },
    "Hydralazine": {
        class: "Direct Vasodilator",
        brandNames: "Apresoline",
        administration: "Oral, IV",
        halfLife: "2-8 hours",
        uses: "Hydralazine is used to treat high blood pressure, usually in combination with other antihypertensive agents.",
        dosage: "10-50 mg four times daily. Maximum dose 300 mg/day.",
        sideEffects: [
            "Headache",
            "Tachycardia",
            "Nausea",
            "Flushing",
            "Lupus-like syndrome",
            "Peripheral neuropathy"
        ],
        interactions: [
            { drug: "MAO inhibitors", level: "high", description: "Risk of severe hypotension" },
            { drug: "Beta blockers", level: "medium", description: "May counteract reflex tachycardia" },
            { drug: "NSAIDs", level: "medium", description: "May reduce antihypertensive effect" }
        ],
        safety: "Use with caution in patients with coronary artery disease or mitral valve rheumatic heart disease. Monitor for lupus-like symptoms."
    },
    "Minoxidil": {
        class: "Direct Vasodilator",
        brandNames: "Loniten",
        administration: "Oral",
        halfLife: "4.2 hours",
        uses: "Minoxidil is used to treat severe high blood pressure that has not responded to other antihypertensive agents.",
        dosage: "5-40 mg once daily. Maximum dose 100 mg/day.",
        sideEffects: [
            "Hypertrichosis (excessive hair growth)",
            "Edema",
            "Tachycardia",
            "Pericardial effusion",
            "Headache",
            "Weight gain"
        ],
        interactions: [
            { drug: "Guanethidine", level: "high", description: "Risk of severe orthostatic hypotension" },
            { drug: "Diuretics", level: "medium", description: "May help control edema" },
            { drug: "Beta blockers", level: "medium", description: "May help control reflex tachycardia" }
        ],
        safety: "Reserved for severe, treatment-resistant hypertension. Requires concurrent diuretic and beta blocker therapy."
    },
    "Nebivolol": {
        class: "Beta Blocker",
        brandNames: "Bystolic",
        administration: "Oral",
        halfLife: "12-19 hours",
        uses: "Nebivolol is used to treat high blood pressure. It has vasodilatory properties through nitric oxide release.",
        dosage: "5-40 mg once daily. Start with 5 mg once daily.",
        sideEffects: [
            "Headache",
            "Fatigue",
            "Dizziness",
            "Diarrhea",
            "Nausea",
            "Bradycardia"
        ],
        interactions: [
            { drug: "Other beta blockers", level: "high", description: "Additive bradycardic effects" },
            { drug: "Digitalis", level: "medium", description: "Additive effects on AV conduction" },
            { drug: "CYP2D6 inhibitors", level: "medium", description: "Increased nebivolol levels" }
        ],
        safety: "Do not abruptly discontinue. Use with caution in patients with severe hepatic impairment."
    },
    "Atorvastatin": {
        class: "HMG-CoA Reductase Inhibitor (Statin)",
        brandNames: "Lipitor",
        administration: "Oral",
        halfLife: "14 hours",
        uses: "Atorvastatin is used to lower bad cholesterol and triglycerides in the blood. It also raises good cholesterol and reduces the risk of heart attack, stroke, and other heart complications in people with diabetes, coronary heart disease, or other risk factors.",
        dosage: "Initial dose 10-20 mg once daily. Maintenance dose 10-80 mg daily. Maximum dose 80 mg/day. Take with or without food.",
        sideEffects: [
            "Headache",
            "Muscle pain or weakness",
            "Joint pain",
            "Nausea",
            "Constipation",
            "Diarrhea",
            "Liver enzyme abnormalities"
        ],
        interactions: [
            { drug: "Grapefruit juice", level: "high", description: "May significantly increase drug levels and risk of side effects" },
            { drug: "Cyclosporine", level: "high", description: "Increased risk of muscle problems" },
            { drug: "Certain antibiotics", level: "high", description: "Increased risk of myopathy" },
            { drug: "Warfarin", level: "medium", description: "May increase anticoagulant effect" }
        ],
        safety: "May cause serious muscle problems (myopathy and rhabdomyolysis). Report unexplained muscle pain, tenderness, or weakness. Regular liver function tests recommended. Not recommended during pregnancy."
    },

    "Rosuvastatin": {
        class: "HMG-CoA Reductase Inhibitor (Statin)",
        brandNames: "Crestor",
        administration: "Oral",
        halfLife: "19 hours",
        uses: "Rosuvastatin is used along with a proper diet to lower bad cholesterol and triglycerides and raise good cholesterol in the blood. It reduces the risk of heart attack and stroke in certain people.",
        dosage: "Initial dose 5-10 mg once daily. Maintenance dose 5-40 mg daily. Maximum dose 40 mg/day. Take with or without food.",
        sideEffects: [
            "Headache",
            "Muscle pain",
            "Abdominal pain",
            "Nausea",
            "Weakness",
            "Memory problems",
            "Liver enzyme elevation"
        ],
        interactions: [
            { drug: "Cyclosporine", level: "high", description: "Significantly increases rosuvastatin levels" },
            { drug: "Gemfibrozil", level: "high", description: "Increased risk of muscle problems" },
            { drug: "Warfarin", level: "medium", description: "May increase anticoagulant effect" },
            { drug: "Oral contraceptives", level: "medium", description: "May increase hormone levels" }
        ],
        safety: "Risk of serious muscle problems. Asian patients may require lower doses. Monitor liver enzymes before and during treatment. Contraindicated in pregnancy."
    },

    "Simvastatin": {
        class: "HMG-CoA Reductase Inhibitor (Statin)",
        brandNames: "Zocor",
        administration: "Oral",
        halfLife: "1.9 hours",
        uses: "Simvastatin is used to lower cholesterol and triglycerides in the blood. It helps prevent heart attacks, strokes, and other heart complications in people with high cholesterol and other risk factors.",
        dosage: "Initial dose 10-20 mg once daily in the evening. Maintenance dose 5-80 mg daily. Maximum dose 80 mg/day.",
        sideEffects: [
            "Headache",
            "Abdominal pain",
            "Constipation",
            "Upper respiratory infection",
            "Muscle pain",
            "Liver enzyme elevation"
        ],
        interactions: [
            { drug: "Grapefruit juice", level: "high", description: "Avoid large quantities" },
            { drug: "Amiodarone", level: "high", description: "Increased risk of myopathy" },
            { drug: "Verapamil", level: "high", description: "Increased risk of muscle problems" },
            { drug: "Diltiazem", level: "medium", description: "Increased risk of side effects" }
        ],
        safety: "Higher risk of muscle problems compared to other statins. 80 mg dose has increased risk. Regular liver function monitoring required. Not for use during pregnancy."
    },

    "Pravastatin": {
        class: "HMG-CoA Reductase Inhibitor (Statin)",
        brandNames: "Pravachol",
        administration: "Oral",
        halfLife: "1.8 hours",
        uses: "Pravastatin is used to lower cholesterol and triglycerides in the blood. It helps slow the progression of heart disease and reduces the risk of heart attacks and strokes.",
        dosage: "Initial dose 40 mg once daily. Maintenance dose 10-80 mg daily. Take at bedtime, with or without food.",
        sideEffects: [
            "Headache",
            "Nausea",
            "Vomiting",
            "Diarrhea",
            "Rash",
            "Muscle pain",
            "Liver enzyme changes"
        ],
        interactions: [
            { drug: "Cyclosporine", level: "high", description: "Increased risk of muscle problems" },
            { drug: "Gemfibrozil", level: "medium", description: "May increase risk of myopathy" },
            { drug: "Colchicine", level: "medium", description: "Increased risk of muscle toxicity" }
        ],
        safety: "Generally better tolerated than other statins. Still requires liver function monitoring. Report unexplained muscle pain. Contraindicated in active liver disease and pregnancy."
    },

    "Lovastatin": {
        class: "HMG-CoA Reductase Inhibitor (Statin)",
        brandNames: "Mevacor, Altoprev",
        administration: "Oral",
        halfLife: "2-3 hours",
        uses: "Lovastatin is used to lower cholesterol and triglycerides in the blood. It helps prevent heart disease and heart attacks in people with high cholesterol.",
        dosage: "Immediate-release: 20 mg once daily with evening meal. Extended-release: 20-60 mg daily at bedtime. Maximum dose 80 mg/day.",
        sideEffects: [
            "Headache",
            "Flatulence",
            "Abdominal pain",
            "Diarrhea",
            "Nausea",
            "Muscle cramps",
            "Rash"
        ],
        interactions: [
            { drug: "Grapefruit juice", level: "high", description: "Significantly increases drug levels" },
            { drug: "Cyclosporine", level: "high", description: "Increased risk of rhabdomyolysis" },
            { drug: "Gemfibrozil", level: "high", description: "Increased risk of muscle problems" },
            { drug: "Niacin", level: "medium", description: "Increased risk of myopathy" }
        ],
        safety: "Take with food for better absorption. Higher risk of muscle problems with certain interactions. Regular liver function tests needed. Avoid during pregnancy."
    },

    "Pitavastatin": {
        class: "HMG-CoA Reductase Inhibitor (Statin)",
        brandNames: "Livalo, Zypitamag",
        administration: "Oral",
        halfLife: "12 hours",
        uses: "Pitavastatin is used to lower bad cholesterol and triglycerides while raising good cholesterol. It's often prescribed when patients cannot tolerate other statins.",
        dosage: "Initial dose 2 mg once daily. Maintenance dose 1-4 mg daily. Maximum dose 4 mg/day. Take with or without food.",
        sideEffects: [
            "Back pain",
            "Constipation",
            "Diarrhea",
            "Muscle pain",
            "Pain in extremities",
            "Insomnia"
        ],
        interactions: [
            { drug: "Cyclosporine", level: "high", description: "Contraindicated combination" },
            { drug: "Erythromycin", level: "medium", description: "May increase pitavastatin levels" },
            { drug: "Rifampin", level: "medium", description: "May decrease pitavastatin effectiveness" }
        ],
        safety: "Generally well-tolerated with fewer drug interactions than other statins. Still requires liver function monitoring. Report muscle pain or weakness."
    },

    "Fluvastatin": {
        class: "HMG-CoA Reductase Inhibitor (Statin)",
        brandNames: "Lescol, Lescol XL",
        administration: "Oral",
        halfLife: "2.3 hours",
        uses: "Fluvastatin is used to lower cholesterol and triglycerides in the blood. It helps prevent heart disease progression and cardiovascular events in high-risk patients.",
        dosage: "Immediate-release: 20-40 mg twice daily. Extended-release: 80 mg once daily at bedtime.",
        sideEffects: [
            "Headache",
            "Dyspepsia",
            "Abdominal pain",
            "Nausea",
            "Insomnia",
            "Muscle pain"
        ],
        interactions: [
            { drug: "Cyclosporine", level: "high", description: "Increased risk of muscle toxicity" },
            { drug: "Fluconazole", level: "medium", description: "May increase fluvastatin levels" },
            { drug: "Cholestyramine", level: "medium", description: "Take at least 4 hours apart" }
        ],
        safety: "Generally considered a weaker statin. Still effective for cholesterol lowering. Monitor liver enzymes. Take extended-release at bedtime."
    },

    "Ezetimibe": {
        class: "Cholesterol Absorption Inhibitor",
        brandNames: "Zetia",
        administration: "Oral",
        halfLife: "22 hours",
        uses: "Ezetimibe is used to lower high cholesterol alone or with statins. It works by decreasing cholesterol absorption in the intestine.",
        dosage: "10 mg once daily. Can be taken with or without food, with or without statins.",
        sideEffects: [
            "Diarrhea",
            "Joint pain",
            "Tiredness",
            "Sinusitis",
            "Upper respiratory infection",
            "Abdominal pain"
        ],
        interactions: [
            { drug: "Cholestyramine", level: "medium", description: "Decreases ezetimibe absorption" },
            { drug: "Fibrates", level: "medium", description: "May increase risk of gallstones" },
            { drug: "Cyclosporine", level: "medium", description: "Increases ezetimibe levels" }
        ],
        safety: "Generally well-tolerated. Can be used in patients who cannot take statins. Monitor liver function when used with statins. Not for use during pregnancy."
    },

    "Fenofibrate": {
        class: "Fibrate",
        brandNames: "Tricor, Antara, Lipofen",
        administration: "Oral",
        halfLife: "20 hours",
        uses: "Fenofibrate is used to lower high triglycerides and increase good cholesterol. It's particularly effective for patients with high triglycerides and low HDL.",
        dosage: "Dose varies by formulation: 48-145 mg daily. Take with food for better absorption.",
        sideEffects: [
            "Abdominal pain",
            "Back pain",
            "Headache",
            "Nausea",
            "Increased liver enzymes",
            "Respiratory disorders"
        ],
        interactions: [
            { drug: "Warfarin", level: "high", description: "Increases anticoagulant effect" },
            { drug: "Statins", level: "medium", description: "Increased risk of muscle problems" },
            { drug: "Cyclosporine", level: "medium", description: "Increased risk of kidney problems" }
        ],
        safety: "Monitor liver function regularly. Increased risk of gallstones. Use with caution in kidney impairment. Contraindicated in severe renal disease."
    },

    "Gemfibrozil": {
        class: "Fibrate",
        brandNames: "Lopid",
        administration: "Oral",
        halfLife: "1.5 hours",
        uses: "Gemfibrozil is used to lower high triglycerides and reduce the risk of heart disease in certain patients with high cholesterol and triglycerides.",
        dosage: "600 mg twice daily, 30 minutes before morning and evening meals.",
        sideEffects: [
            "Abdominal pain",
            "Diarrhea",
            "Nausea",
            "Vomiting",
            "Rash",
            "Dizziness",
            "Blurred vision"
        ],
        interactions: [
            { drug: "Statins", level: "high", description: "Significantly increases risk of muscle problems" },
            { drug: "Warfarin", level: "high", description: "Increases anticoagulant effect" },
            { drug: "Repaglinide", level: "high", description: "Increases risk of hypoglycemia" }
        ],
        safety: "Take 30 minutes before meals. High risk of muscle problems when combined with statins. Regular liver function monitoring required."
    },

    "Niacin": {
        class: "Vitamin B3",
        brandNames: "Niaspan, Slo-Niacin",
        administration: "Oral",
        halfLife: "20-45 minutes",
        uses: "Niacin is used to lower bad cholesterol and triglycerides and raise good cholesterol. It's often used when statins alone are insufficient.",
        dosage: "500 mg once daily at bedtime, gradually increased to 1-2 grams daily. Take with low-fat snack to reduce flushing.",
        sideEffects: [
            "Flushing (redness, warmth, itching)",
            "Headache",
            "Dizziness",
            "Nausea",
            "Vomiting",
            "Diarrhea",
            "Liver enzyme elevation"
        ],
        interactions: [
            { drug: "Statins", level: "medium", description: "Increased risk of muscle problems" },
            { drug: "Alcohol", level: "medium", description: "May increase flushing" },
            { drug: "Blood pressure medications", level: "medium", description: "May increase dizziness" }
        ],
        safety: "Take aspirin 30 minutes before dose to reduce flushing. Regular liver function tests required. Monitor blood sugar in diabetics."
    },

    "Colestipol": {
        class: "Bile Acid Sequestrant",
        brandNames: "Colestid",
        administration: "Oral",
        halfLife: "Not applicable",
        uses: "Colestipol is used to lower high cholesterol alone or with other medications. It works by binding bile acids in the intestine.",
        dosage: "Tablets: 2-16 grams daily. Granules: 5-30 grams daily. Take with plenty of fluid.",
        sideEffects: [
            "Constipation",
            "Abdominal pain",
            "Bloating",
            "Gas",
            "Nausea",
            "Vomiting",
            "Diarrhea"
        ],
        interactions: [
            { drug: "Warfarin", level: "high", description: "Take at least 4-6 hours apart" },
            { drug: "Digoxin", level: "high", description: "Take at least 1-2 hours before or 4-6 hours after" },
            { drug: "Thyroid medications", level: "medium", description: "Take at least 4-6 hours apart" }
        ],
        safety: "Take other medications 1 hour before or 4 hours after colestipol. Increase fluid and fiber intake to prevent constipation. May interfere with fat-soluble vitamin absorption."
    },

    "Cholestyramine": {
        class: "Bile Acid Sequestrant",
        brandNames: "Questran, Prevalite",
        administration: "Oral",
        halfLife: "Not applicable",
        uses: "Cholestyramine is used to lower high cholesterol and to treat itching associated with partial biliary obstruction.",
        dosage: "4 grams once or twice daily, gradually increased to 8-16 grams daily in divided doses. Mix with water or non-carbonated beverage.",
        sideEffects: [
            "Constipation",
            "Abdominal pain",
            "Bloating",
            "Gas",
            "Nausea",
            "Vomiting",
            "Diarrhea"
        ],
        interactions: [
            { drug: "Warfarin", level: "high", description: "Take at least 4-6 hours apart" },
            { drug: "Digoxin", level: "high", description: "Take at least 1-2 hours before or 4-6 hours after" },
            { drug: "Thyroid medications", level: "medium", description: "Take at least 4-6 hours apart" }
        ],
        safety: "Mix powder well with liquid. Take other medications 1 hour before or 4-6 hours after cholestyramine. May cause vitamin deficiencies with long-term use."
    },

    "Alirocumab": {
        class: "PCSK9 Inhibitor",
        brandNames: "Praluent",
        administration: "Subcutaneous injection",
        halfLife: "17-20 days",
        uses: "Alirocumab is used to lower high cholesterol in patients with familial hypercholesterolemia or clinical atherosclerotic cardiovascular disease who require additional lowering.",
        dosage: "75 mg or 150 mg every 2 weeks. May increase to 150 mg every 2 weeks if needed.",
        sideEffects: [
            "Injection site reactions",
            "Common cold symptoms",
            "Itching",
            "Rash",
            "Allergic reactions"
        ],
        interactions: [
            { drug: "None known", level: "low", description: "No significant drug interactions reported" }
        ],
        safety: "Rotate injection sites. Monitor for allergic reactions. Patient must be trained in proper injection technique. Store in refrigerator."
    },

    "Evolocumab": {
        class: "PCSK9 Inhibitor",
        brandNames: "Repatha",
        administration: "Subcutaneous injection",
        halfLife: "11-17 days",
        uses: "Evolocumab is used to lower high cholesterol in patients with familial hypercholesterolemia or established cardiovascular disease who need additional cholesterol lowering.",
        dosage: "140 mg every 2 weeks or 420 mg once monthly. Administer subcutaneously.",
        sideEffects: [
            "Injection site reactions",
            "Upper respiratory infection",
            "Common cold",
            "Back pain",
            "Flu-like symptoms"
        ],
        interactions: [
            { drug: "None known", level: "low", description: "No significant drug interactions reported" }
        ],
        safety: "Proper injection technique is essential. Rotate injection sites. Monitor for hypersensitivity reactions. Refrigerate until use."
    },

    "Bempedoic acid": {
        class: "ATP Citrate Lyase Inhibitor",
        brandNames: "Nexletol",
        administration: "Oral",
        halfLife: "15-30 hours",
        uses: "Bempedoic acid is used to lower high cholesterol alone or with other medications in patients who cannot tolerate statins or need additional cholesterol lowering.",
        dosage: "180 mg once daily. Take with or without food.",
        sideEffects: [
            "Upper respiratory infection",
            "Muscle spasms",
            "Back pain",
            "Abdominal pain",
            "Anemia",
            "Increased liver enzymes"
        ],
        interactions: [
            { drug: "Simvastatin", level: "medium", description: "May increase simvastatin levels" },
            { drug: "Pravastatin", level: "medium", description: "May increase pravastatin levels" }
        ],
        safety: "Monitor uric acid levels as may cause hyperuricemia. Monitor for gout symptoms. Regular liver function tests recommended."
    },

    "Omega-3 acid ethyl esters": {
        class: "Omega-3 Fatty Acids",
        brandNames: "Lovaza, Omtryg",
        administration: "Oral",
        halfLife: "Not well characterized",
        uses: "Omega-3 acid ethyl esters are used to lower very high triglycerides in adults. They help reduce the risk of cardiovascular events in certain patients.",
        dosage: "4 grams daily taken as a single dose or 2 grams twice daily with food.",
        sideEffects: [
            "Fishy aftertaste",
            "Belching",
            "Upset stomach",
            "Change in sense of taste",
            "Rash",
            "Itching"
        ],
        interactions: [
            { drug: "Blood thinners", level: "medium", description: "May increase bleeding risk" },
            { drug: "Orlistat", level: "medium", description: "May decrease absorption" }
        ],
        safety: "Take with meals to reduce gastrointestinal side effects. Monitor for bleeding if taking anticoagulants. May increase LDL cholesterol in some patients."
    },

    "Icosapent ethyl": {
        class: "Omega-3 Fatty Acid",
        brandNames: "Vascepa",
        administration: "Oral",
        halfLife: "Not well characterized",
        uses: "Icosapent ethyl is used to reduce cardiovascular risk in patients with elevated triglycerides and established cardiovascular disease or diabetes with other risk factors.",
        dosage: "4 grams daily taken as 2 grams twice daily with food.",
        sideEffects: [
            "Joint pain",
            "Swelling of hands/feet",
            "Constipation",
            "Gout",
            "Atrial fibrillation"
        ],
        interactions: [
            { drug: "Blood thinners", level: "medium", description: "May increase bleeding risk" }
        ],
        safety: "Take with food. Monitor for atrial fibrillation and bleeding events. Regular monitoring of triglycerides and liver function recommended."
    },
    "Warfarin": {
        class: "Vitamin K Antagonist",
        brandNames: "Coumadin, Jantoven",
        administration: "Oral",
        halfLife: "20-60 hours",
        uses: "Warfarin is used to prevent and treat blood clots in conditions like deep vein thrombosis, pulmonary embolism, and to prevent stroke in people with atrial fibrillation or artificial heart valves.",
        dosage: "Initial dose: 2-5 mg daily. Maintenance dose: Adjusted based on INR monitoring. Typical range 2-10 mg daily. Dosage must be individualized based on INR results.",
        sideEffects: [
            "Bleeding or bruising more easily",
            "Blood in urine or stools",
            "Heavy menstrual bleeding",
            "Headache",
            "Hair loss",
            "Skin necrosis (rare)"
        ],
        interactions: [
            { drug: "Aspirin", level: "high", description: "Increased risk of bleeding" },
            { drug: "NSAIDs", level: "high", description: "Increased risk of gastrointestinal bleeding" },
            { drug: "Antibiotics", level: "medium", description: "May increase warfarin effect" },
            { drug: "Vitamin K", level: "high", description: "Decreases warfarin effectiveness" }
        ],
        safety: "Requires regular INR monitoring. Many drug and food interactions. Avoid in pregnancy - can cause birth defects. Carry identification indicating warfarin use."
    },
    "Heparin": {
        class: "Unfractionated Heparin",
        brandNames: "Heparin Sodium",
        administration: "Intravenous, Subcutaneous",
        halfLife: "1-2 hours",
        uses: "Heparin is used to prevent and treat blood clots in veins, arteries, or lungs. It is also used during heart attacks, open-heart surgery, and dialysis.",
        dosage: "IV: Initial bolus 80 units/kg, then 18 units/kg/hour. Subcutaneous: 5,000 units every 8-12 hours. Dosage adjusted based on aPTT monitoring.",
        sideEffects: [
            "Bleeding or bruising",
            "Pain at injection site",
            "Thrombocytopenia",
            "Elevated liver enzymes",
            "Osteoporosis with long-term use",
            "Allergic reactions"
        ],
        interactions: [
            { drug: "Other anticoagulants", level: "high", description: "Increased bleeding risk" },
            { drug: "Anti-platelet drugs", level: "high", description: "Increased bleeding risk" },
            { drug: "Digoxin", level: "low", description: "May decrease digoxin levels" },
            { drug: "Antihistamines", level: "medium", description: "May decrease anticoagulant effect" }
        ],
        safety: "Monitor aPTT regularly. Risk of heparin-induced thrombocytopenia (HIT). Protamine sulfate is the antidote for overdose."
    },
    "Enoxaparin": {
        class: "Low Molecular Weight Heparin",
        brandNames: "Lovenox",
        administration: "Subcutaneous",
        halfLife: "4.5-7 hours",
        uses: "Enoxaparin is used to prevent and treat deep vein thrombosis (DVT) and pulmonary embolism (PE). Also used in unstable angina and non-Q-wave myocardial infarction.",
        dosage: "DVT prophylaxis: 40 mg once daily. DVT treatment: 1 mg/kg every 12 hours. Adjust dose for renal impairment.",
        sideEffects: [
            "Bleeding or bruising",
            "Pain at injection site",
            "Thrombocytopenia",
            "Fever",
            "Nausea",
            "Anemia"
        ],
        interactions: [
            { drug: "Other anticoagulants", level: "high", description: "Increased bleeding risk" },
            { drug: "NSAIDs", level: "high", description: "Increased bleeding risk" },
            { drug: "Platelet inhibitors", level: "high", description: "Increased bleeding risk" }
        ],
        safety: "Monitor platelet counts regularly. Use with caution in renal impairment. Not interchangeable with unfractionated heparin."
    },
    "Dabigatran": {
        class: "Direct Thrombin Inhibitor",
        brandNames: "Pradaxa",
        administration: "Oral",
        halfLife: "12-17 hours",
        uses: "Dabigatran is used to reduce the risk of stroke and blood clots in people with atrial fibrillation, and to treat and prevent deep vein thrombosis and pulmonary embolism.",
        dosage: "Atrial fibrillation: 150 mg twice daily. DVT/PE treatment: 150 mg twice daily after 5-10 days of parenteral anticoagulant.",
        sideEffects: [
            "Bleeding",
            "Gastrointestinal symptoms",
            "Dyspepsia",
            "Abdominal pain",
            "Nausea",
            "Liver enzyme elevation"
        ],
        interactions: [
            { drug: "Rifampin", level: "high", description: "Decreases dabigatran levels" },
            { drug: "Ketoconazole", level: "high", description: "Increases dabigatran levels" },
            { drug: "P-gp inducers", level: "medium", description: "May decrease effectiveness" },
            { drug: "P-gp inhibitors", level: "medium", description: "May increase bleeding risk" }
        ],
        safety: "No routine coagulation monitoring required. Idarucizumab is the specific reversal agent. Risk of spinal hematoma with neuraxial anesthesia."
    },
    "Rivaroxaban": {
        class: "Factor Xa Inhibitor",
        brandNames: "Xarelto",
        administration: "Oral",
        halfLife: "5-9 hours (young), 11-13 hours (elderly)",
        uses: "Rivaroxaban is used to reduce the risk of stroke in atrial fibrillation, treat and prevent DVT and PE, and for thromboprophylaxis after hip or knee replacement surgery.",
        dosage: "Atrial fibrillation: 20 mg once daily with evening meal. DVT/PE treatment: 15 mg twice daily for 21 days, then 20 mg once daily.",
        sideEffects: [
            "Bleeding",
            "Back pain",
            "Itching",
            "Muscle spasms",
            "Elevated liver enzymes",
            "Fatigue"
        ],
        interactions: [
            { drug: "Strong CYP3A4 inhibitors", level: "high", description: "Increased bleeding risk" },
            { drug: "Strong CYP3A4 inducers", level: "high", description: "Decreased effectiveness" },
            { drug: "NSAIDs", level: "medium", description: "Increased bleeding risk" },
            { drug: "Aspirin", level: "medium", description: "Increased bleeding risk" }
        ],
        safety: "Take with food to improve absorption. Use with caution in renal impairment. Andexanet alfa is the reversal agent."
    },
    "Apixaban": {
        class: "Factor Xa Inhibitor",
        brandNames: "Eliquis",
        administration: "Oral",
        halfLife: "12 hours",
        uses: "Apixaban is used to reduce the risk of stroke in atrial fibrillation, treat and prevent DVT and PE, and for thromboprophylaxis after hip or knee replacement surgery.",
        dosage: "Atrial fibrillation: 5 mg twice daily. DVT/PE treatment: 10 mg twice daily for 7 days, then 5 mg twice daily. Reduce dose in patients with certain characteristics.",
        sideEffects: [
            "Bleeding",
            "Nausea",
            "Anemia",
            "Rash",
            "Elevated liver enzymes",
            "Headache"
        ],
        interactions: [
            { drug: "Strong CYP3A4/P-gp inhibitors", level: "high", description: "Increased bleeding risk" },
            { drug: "Strong CYP3A4/P-gp inducers", level: "high", description: "Decreased effectiveness" },
            { drug: "Anticoagulants", level: "high", description: "Increased bleeding risk" }
        ],
        safety: "No routine monitoring required. Andexanet alfa is the reversal agent. Use with caution in severe renal impairment."
    },
    "Edoxaban": {
        class: "Factor Xa Inhibitor",
        brandNames: "Savaysa, Lixiana",
        administration: "Oral",
        halfLife: "10-14 hours",
        uses: "Edoxaban is used to reduce the risk of stroke in atrial fibrillation and to treat deep vein thrombosis and pulmonary embolism.",
        dosage: "Atrial fibrillation: 60 mg once daily. DVT/PE treatment: 60 mg once daily after 5-10 days of parenteral anticoagulant. Reduce to 30 mg in certain patients.",
        sideEffects: [
            "Bleeding",
            "Rash",
            "Abnormal liver function tests",
            "Anemia",
            "Nausea",
            "Headache"
        ],
        interactions: [
            { drug: "P-gp inhibitors", level: "high", description: "Increased bleeding risk" },
            { drug: "Rifampin", level: "medium", description: "Decreased effectiveness" },
            { drug: "Anticoagulants", level: "high", description: "Increased bleeding risk" }
        ],
        safety: "Not recommended in patients with CrCl >95 mL/min due to increased stroke risk. Andexanet alfa is the reversal agent."
    },
    "Fondaparinux": {
        class: "Selective Factor Xa Inhibitor",
        brandNames: "Arixtra",
        administration: "Subcutaneous",
        halfLife: "17-21 hours",
        uses: "Fondaparinux is used to prevent and treat deep vein thrombosis and pulmonary embolism, particularly after hip fracture, hip replacement, or knee replacement surgery.",
        dosage: "DVT prophylaxis: 2.5 mg once daily. DVT/PE treatment: <50 kg: 5 mg; 50-100 kg: 7.5 mg; >100 kg: 10 mg once daily.",
        sideEffects: [
            "Bleeding",
            "Anemia",
            "Fever",
            "Nausea",
            "Edema",
            "Insomnia"
        ],
        interactions: [
            { drug: "Other anticoagulants", level: "high", description: "Increased bleeding risk" },
            { drug: "Platelet inhibitors", level: "high", description: "Increased bleeding risk" },
            { drug: "NSAIDs", level: "medium", description: "Increased bleeding risk" }
        ],
        safety: "Contraindicated in severe renal impairment. No specific antidote. Monitor platelet counts for thrombocytopenia."
    },
    "Argatroban": {
        class: "Direct Thrombin Inhibitor",
        brandNames: "Argatroban",
        administration: "Intravenous",
        halfLife: "39-51 minutes",
        uses: "Argatroban is used as an anticoagulant for prophylaxis or treatment of thrombosis in patients with heparin-induced thrombocytopenia (HIT), and during percutaneous coronary interventions.",
        dosage: "HIT treatment: Initial 2 mcg/kg/min, adjust to aPTT 1.5-3 times baseline. PCI: 350 mcg/kg bolus, then 25 mcg/kg/min.",
        sideEffects: [
            "Bleeding",
            "Hypotension",
            "Fever",
            "Diarrhea",
            "Nausea",
            "Headache",
            "Cardiac arrest"
        ],
        interactions: [
            { drug: "Other anticoagulants", level: "high", description: "Increased bleeding risk" },
            { drug: "Anti-platelet drugs", level: "high", description: "Increased bleeding risk" },
            { drug: "Thrombolytics", level: "high", description: "Increased bleeding risk" }
        ],
        safety: "Monitor aPTT regularly. No specific antidote. Use with caution in hepatic impairment."
    },
    "Bivalirudin": {
        class: "Direct Thrombin Inhibitor",
        brandNames: "Angiomax",
        administration: "Intravenous",
        halfLife: "25 minutes",
        uses: "Bivalirudin is used as an anticoagulant in patients undergoing percutaneous coronary intervention (PCI), including those with heparin-induced thrombocytopenia.",
        dosage: "PCI: 0.75 mg/kg IV bolus, then 1.75 mg/kg/hour infusion for duration of procedure. May continue for up to 4 hours post-procedure.",
        sideEffects: [
            "Bleeding",
            "Hypotension",
            "Headache",
            "Nausea",
            "Back pain",
            "Insomnia",
            "Anxiety"
        ],
        interactions: [
            { drug: "Other anticoagulants", level: "high", description: "Increased bleeding risk" },
            { drug: "Glycoprotein IIb/IIIa inhibitors", level: "high", description: "Increased bleeding risk" },
            { drug: "Thrombolytics", level: "high", description: "Increased bleeding risk" }
        ],
        safety: "Monitor ACT during procedure. No specific antidote. Use with caution in renal impairment."
    },
    "Danaparoid": {
        class: "Heparinoid",
        brandNames: "Orgaran",
        administration: "Subcutaneous",
        halfLife: "24 hours",
        uses: "Danaparoid is used for prophylaxis of deep vein thrombosis and for treatment of heparin-induced thrombocytopenia (HIT).",
        dosage: "DVT prophylaxis: 750 units twice daily. HIT treatment: Loading dose 1250-2500 units, then 150-400 units/hour IV, or 750 units SC twice daily.",
        sideEffects: [
            "Bleeding",
            "Pain at injection site",
            "Skin reactions",
            "Fever",
            "Rash",
            "Liver enzyme elevation"
        ],
        interactions: [
            { drug: "Other anticoagulants", level: "high", description: "Increased bleeding risk" },
            { drug: "Anti-platelet drugs", level: "high", description: "Increased bleeding risk" },
            { drug: "Thrombolytics", level: "high", description: "Increased bleeding risk" }
        ],
        safety: "Cross-reactivity with HIT antibodies may occur. Monitor anti-Xa levels. No specific antidote available."
    },
    "Acenocoumarol": {
        class: "Vitamin K Antagonist",
        brandNames: "Sintrom",
        administration: "Oral",
        halfLife: "8-11 hours",
        uses: "Acenocoumarol is used for prevention and treatment of thromboembolic disorders, including deep vein thrombosis, pulmonary embolism, and stroke prevention in atrial fibrillation.",
        dosage: "Initial dose: 2-4 mg daily. Maintenance: Adjusted based on INR monitoring, typically 1-8 mg daily. Highly variable between patients.",
        sideEffects: [
            "Bleeding",
            "Skin necrosis",
            "Purple toe syndrome",
            "Alopecia",
            "Rash",
            "Fever",
            "Nausea"
        ],
        interactions: [
            { drug: "Many antibiotics", level: "high", description: "Increased anticoagulant effect" },
            { drug: "Vitamin K", level: "high", description: "Decreased effectiveness" },
            { drug: "NSAIDs", level: "high", description: "Increased bleeding risk" },
            { drug: "Barbiturates", level: "medium", description: "Decreased effectiveness" }
        ],
        safety: "Requires frequent INR monitoring. Many drug and food interactions. Vitamin K is the antidote for overdose."
    },
    "Digoxin": {
        class: "Cardiac Glycoside",
        brandNames: "Lanoxin, Digitek",
        administration: "Oral, IV",
        halfLife: "36-48 hours",
        uses: "Digoxin is used to treat heart failure and atrial fibrillation. It helps the heart beat more strongly and regularly.",
        dosage: "Loading dose: 0.5-1 mg in divided doses over 24 hours. Maintenance: 0.125-0.5 mg daily. Dose must be individualized based on renal function.",
        sideEffects: [
            "Nausea and vomiting",
            "Loss of appetite",
            "Visual disturbances (yellow-green halos)",
            "Confusion",
            "Headache",
            "Fatigue"
        ],
        interactions: [
            { drug: "Diuretics", level: "high", description: "May cause hypokalemia and increase digoxin toxicity" },
            { drug: "Amiodarone", level: "high", description: "Increases digoxin levels" },
            { drug: "Verapamil", level: "high", description: "Increases digoxin levels" },
            { drug: "Quinidine", level: "high", description: "Increases digoxin levels" }
        ],
        safety: "Narrow therapeutic index - requires regular monitoring of blood levels. Toxicity can be fatal. Watch for signs of toxicity especially in elderly and renal impairment."
    },

    "Sacubitril/Valsartan": {
        class: "ARNI (Angiotensin Receptor-Neprilysin Inhibitor)",
        brandNames: "Entresto",
        administration: "Oral",
        halfLife: "Sacubitril: 1.4 hours, Valsartan: 9.9 hours",
        uses: "Used to reduce the risk of cardiovascular death and hospitalization for heart failure in patients with chronic heart failure.",
        dosage: "Initial: 49/51 mg twice daily. Target: 97/103 mg twice daily. Must replace ACE inhibitor or ARB with 36-hour washout period.",
        sideEffects: [
            "Hypotension",
            "Hyperkalemia",
            "Cough",
            "Dizziness",
            "Renal impairment"
        ],
        interactions: [
            { drug: "ACE inhibitors", level: "high", description: "Contraindicated - increased risk of angioedema" },
            { drug: "Potassium-sparing diuretics", level: "high", description: "Increased risk of hyperkalemia" },
            { drug: "NSAIDs", level: "medium", description: "May reduce antihypertensive effect and worsen renal function" },
            { drug: "Lithium", level: "high", description: "May increase lithium levels" }
        ],
        safety: "Contraindicated with ACE inhibitors. Do not use during pregnancy. Monitor serum potassium and renal function regularly."
    },

    "Carvedilol": {
        class: "Beta-Blocker with Alpha-1 Blocking Activity",
        brandNames: "Coreg, Coreg CR",
        administration: "Oral",
        halfLife: "7-10 hours",
        uses: "Used for heart failure, hypertension, and left ventricular dysfunction following myocardial infarction.",
        dosage: "Heart failure: Start 3.125 mg twice daily, double dose every 2 weeks. Max: 25 mg twice daily (≤85 kg) or 50 mg twice daily (>85 kg).",
        sideEffects: [
            "Dizziness",
            "Fatigue",
            "Weight gain",
            "Bradycardia",
            "Hypotension",
            "Edema"
        ],
        interactions: [
            { drug: "Calcium channel blockers", level: "high", description: "Increased risk of bradycardia and AV block" },
            { drug: "Clonidine", level: "high", description: "Rebound hypertension if discontinued" },
            { drug: "Insulin", level: "medium", description: "May mask symptoms of hypoglycemia" },
            { drug: "Digoxin", level: "medium", description: "May increase digoxin levels" }
        ],
        safety: "Do not abruptly discontinue. Use with caution in patients with asthma or COPD. May mask signs of hyperthyroidism and hypoglycemia."
    },

    "Bisoprolol": {
        class: "Beta-1 Selective Blocker",
        brandNames: "Zebeta, Monocor",
        administration: "Oral",
        halfLife: "9-12 hours",
        uses: "Used for hypertension and chronic heart failure. Helps control heart rate and blood pressure.",
        dosage: "Hypertension: 2.5-10 mg once daily. Heart failure: Start 1.25 mg once daily, increase gradually. Max: 10 mg daily.",
        sideEffects: [
            "Bradycardia",
            "Fatigue",
            "Dizziness",
            "Cold extremities",
            "Depression",
            "Sleep disturbances"
        ],
        interactions: [
            { drug: "Calcium channel blockers", level: "high", description: "Increased risk of bradycardia and heart block" },
            { drug: "Clonidine", level: "high", description: "Risk of rebound hypertension" },
            { drug: "NSAIDs", level: "medium", description: "May reduce antihypertensive effect" },
            { drug: "Insulin", level: "medium", description: "May mask hypoglycemia symptoms" }
        ],
        safety: "Do not stop abruptly - taper over 1-2 weeks. Use with caution in patients with diabetes, asthma, or peripheral vascular disease."
    },

    "Spironolactone": {
        class: "Potassium-Sparing Diuretic, Aldosterone Antagonist",
        brandNames: "Aldactone",
        administration: "Oral",
        halfLife: "13-24 hours",
        uses: "Used for heart failure, hypertension, edema, and primary hyperaldosteronism. Also used for hormonal acne and hirsutism in women.",
        dosage: "Edema: 25-200 mg daily. Hypertension: 25-50 mg daily. Heart failure: 12.5-25 mg daily. Max: 400 mg daily.",
        sideEffects: [
            "Hyperkalemia",
            "Gynecomastia (in males)",
            "Menstrual irregularities",
            "Breast tenderness",
            "Dizziness",
            "Headache"
        ],
        interactions: [
            { drug: "ACE inhibitors", level: "high", description: "Increased risk of hyperkalemia" },
            { drug: "NSAIDs", level: "high", description: "Increased risk of renal impairment and hyperkalemia" },
            { drug: "Digoxin", level: "medium", description: "May increase digoxin levels" },
            { drug: "Lithium", level: "medium", description: "May increase lithium levels" }
        ],
        safety: "Monitor potassium levels regularly. Contraindicated in anuria, acute renal insufficiency, or hyperkalemia. May cause endocrine effects with long-term use."
    },

    "Eplerenone": {
        class: "Selective Aldosterone Blocker",
        brandNames: "Inspra",
        administration: "Oral",
        halfLife: "4-6 hours",
        uses: "Used for heart failure after myocardial infarction and hypertension. More selective than spironolactone with fewer hormonal side effects.",
        dosage: "Heart failure: Start 25 mg once daily, increase to 50 mg once daily. Hypertension: 50-100 mg once daily. Max: 100 mg daily.",
        sideEffects: [
            "Hyperkalemia",
            "Dizziness",
            "Fatigue",
            "Diarrhea",
            "Cough",
            "Abdominal pain"
        ],
        interactions: [
            { drug: "ACE inhibitors", level: "high", description: "Significantly increased risk of hyperkalemia" },
            { drug: "Potassium supplements", level: "high", description: "Increased risk of hyperkalemia" },
            { drug: "NSAIDs", level: "high", description: "May reduce antihypertensive effect and increase hyperkalemia risk" },
            { drug: "Strong CYP3A4 inhibitors", level: "high", description: "Increased eplerenone levels" }
        ],
        safety: "Monitor potassium levels within first week and monthly thereafter. Contraindicated with potassium >5.5 mEq/L, severe renal impairment, or type 2 diabetes with microalbuminuria."
    },

    "Furosemide": {
        class: "Loop Diuretic",
        brandNames: "Lasix",
        administration: "Oral, IV, IM",
        halfLife: "2 hours",
        uses: "Used for edema associated with heart failure, liver cirrhosis, and renal disease. Also used for hypertension.",
        dosage: "Edema: 20-80 mg initially, may repeat in 6-8 hours. Max: 600 mg daily. Hypertension: 40 mg twice daily.",
        sideEffects: [
            "Dehydration",
            "Hypokalemia",
            "Hypotension",
            "Ototoxicity (with high doses)",
            "Hyperglycemia",
            "Increased uric acid"
        ],
        interactions: [
            { drug: "Aminoglycosides", level: "high", description: "Increased risk of ototoxicity" },
            { drug: "Lithium", level: "high", description: "May increase lithium levels" },
            { drug: "NSAIDs", level: "medium", description: "May reduce diuretic effect" },
            { drug: "Digoxin", level: "medium", description: "Hypokalemia may increase digoxin toxicity" }
        ],
        safety: "Monitor electrolytes, renal function, and blood pressure. Risk of ototoxicity with rapid IV administration or high doses. May cause photosensitivity."
    },

    "Metolazone": {
        class: "Thiazide-like Diuretic",
        brandNames: "Zaroxolyn, Mykrox",
        administration: "Oral",
        halfLife: "14-20 hours",
        uses: "Used for edema and hypertension. Particularly effective in patients with renal impairment when combined with loop diuretics.",
        dosage: "Edema: 5-20 mg once daily. Hypertension: 2.5-5 mg once daily. Max: 20 mg daily.",
        sideEffects: [
            "Hypokalemia",
            "Hyponatremia",
            "Hypotension",
            "Hyperglycemia",
            "Hyperuricemia",
            "Dizziness"
        ],
        interactions: [
            { drug: "Other diuretics", level: "high", description: "Potentiated diuresis and electrolyte loss" },
            { drug: "Lithium", level: "high", description: "May increase lithium levels" },
            { drug: "NSAIDs", level: "medium", description: "May reduce antihypertensive effect" },
            { drug: "Digoxin", level: "medium", description: "Hypokalemia may increase digoxin toxicity" }
        ],
        safety: "Monitor electrolytes regularly, especially potassium. Use with caution in patients with renal or hepatic impairment. May exacerbate gout or diabetes."
    },

    "Ivabradine": {
        class: "Hyperpolarization-Activated Cyclic Nucleotide-Gated Channel Blocker",
        brandNames: "Corlanor, Procoralan",
        administration: "Oral",
        halfLife: "2 hours (11 hours with active metabolite)",
        uses: "Used to reduce hospitalization from worsening heart failure in patients with stable chronic heart failure. Reduces heart rate without affecting blood pressure.",
        dosage: "Start 5 mg twice daily. After 2 weeks, adjust based on heart rate. Max: 7.5 mg twice daily.",
        sideEffects: [
            "Bradycardia",
            "Luminous phenomena (visual brightness)",
            "Atrial fibrillation",
            "Headache",
            "Dizziness",
            "Hypertension"
        ],
        interactions: [
            { drug: "Strong CYP3A4 inhibitors", level: "high", description: "Contraindicated - increases ivabradine levels" },
            { drug: "QT-prolonging drugs", level: "medium", description: "Increased risk of arrhythmias" },
            { drug: "Calcium channel blockers", level: "medium", description: "Additive bradycardia effect" },
            { drug: "Beta-blockers", level: "medium", description: "May be used together but monitor for excessive bradycardia" }
        ],
        safety: "Contraindicated with strong CYP3A4 inhibitors. Monitor heart rate - maintain resting heart rate >50 bpm. May cause visual disturbances that are usually transient."
    },
    "Fluoxetine": {
        class: "Selective Serotonin Reuptake Inhibitor (SSRI)",
        brandNames: "Prozac, Sarafem, Selfemra",
        administration: "Oral",
        halfLife: "4-6 days",
        uses: "Fluoxetine is used to treat major depressive disorder, obsessive-compulsive disorder, bulimia nervosa, panic disorder, and premenstrual dysphoric disorder.",
        dosage: "For depression: Initial dose 20 mg once daily in the morning. May increase after several weeks. Maximum dose 80 mg/day.",
        sideEffects: [
            "Nausea",
            "Headache",
            "Insomnia",
            "Anxiety",
            "Drowsiness",
            "Decreased libido",
            "Dry mouth"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Warfarin", level: "medium", description: "May increase anticoagulant effect" },
            { drug: "Triptans", level: "medium", description: "Increased risk of serotonin syndrome" },
            { drug: "NSAIDs", level: "medium", description: "Increased risk of bleeding" }
        ],
        safety: "Do not use with MAOIs or within 14 days of discontinuing MAOIs. Monitor for worsening depression or suicidal thoughts, especially in children and young adults."
    },

    "Sertraline": {
        class: "Selective Serotonin Reuptake Inhibitor (SSRI)",
        brandNames: "Zoloft",
        administration: "Oral",
        halfLife: "26 hours",
        uses: "Sertraline is used to treat major depressive disorder, obsessive-compulsive disorder, panic disorder, social anxiety disorder, post-traumatic stress disorder, and premenstrual dysphoric disorder.",
        dosage: "Initial dose 50 mg once daily. May increase gradually. Maximum dose 200 mg/day.",
        sideEffects: [
            "Nausea",
            "Diarrhea",
            "Insomnia",
            "Dizziness",
            "Fatigue",
            "Dry mouth",
            "Sexual dysfunction"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Pimozide", level: "high", description: "Contraindicated due to QT prolongation" },
            { drug: "Warfarin", level: "medium", description: "May increase anticoagulant effect" }
        ],
        safety: "Discontinue at least 14 days before starting MAOIs. Monitor for clinical worsening and suicide risk. May cause QT prolongation."
    },

    "Paroxetine": {
        class: "Selective Serotonin Reuptake Inhibitor (SSRI)",
        brandNames: "Paxil, Brisdelle",
        administration: "Oral",
        halfLife: "21 hours",
        uses: "Paroxetine is used to treat major depressive disorder, obsessive-compulsive disorder, panic disorder, social anxiety disorder, generalized anxiety disorder, and post-traumatic stress disorder.",
        dosage: "Initial dose 20 mg once daily. Maximum dose 50-60 mg/day depending on indication.",
        sideEffects: [
            "Nausea",
            "Somnolence",
            "Dry mouth",
            "Dizziness",
            "Sweating",
            "Sexual dysfunction",
            "Weight gain"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Thioridazine", level: "high", description: "Contraindicated due to QT prolongation" },
            { drug: "Tamoxifen", level: "medium", description: "May reduce tamoxifen effectiveness" }
        ],
        safety: "Associated with more withdrawal symptoms than other SSRIs. Taper gradually when discontinuing. Not recommended during pregnancy due to potential fetal risks."
    },

    "Citalopram": {
        class: "Selective Serotonin Reuptake Inhibitor (SSRI)",
        brandNames: "Celexa",
        administration: "Oral",
        halfLife: "35 hours",
        uses: "Citalopram is used to treat major depressive disorder. It may also be used off-label for other conditions.",
        dosage: "Initial dose 20 mg once daily. Maximum dose 40 mg/day (20 mg/day in patients with hepatic impairment or over 60 years).",
        sideEffects: [
            "Nausea",
            "Dry mouth",
            "Somnolence",
            "Insomnia",
            "Increased sweating",
            "Fatigue",
            "Sexual dysfunction"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "QT-prolonging drugs", level: "high", description: "Increased risk of QT prolongation" },
            { drug: "Cimetidine", level: "medium", description: "May increase citalopram levels" }
        ],
        safety: "Dose-dependent QT interval prolongation. Maximum dose 40 mg/day. Use lower doses in elderly patients and those with hepatic impairment."
    },

    "Escitalopram": {
        class: "Selective Serotonin Reuptake Inhibitor (SSRI)",
        brandNames: "Lexapro",
        administration: "Oral",
        halfLife: "27-32 hours",
        uses: "Escitalopram is used to treat major depressive disorder and generalized anxiety disorder.",
        dosage: "Initial dose 10 mg once daily. May increase to 20 mg/day after at least one week.",
        sideEffects: [
            "Nausea",
            "Insomnia",
            "Ejaculation disorder",
            "Fatigue",
            "Somnolence",
            "Increased sweating"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Aspirin", level: "medium", description: "Increased risk of bleeding" },
            { drug: "Linezolid", level: "high", description: "Risk of serotonin syndrome" }
        ],
        safety: "Generally better tolerated than citalopram with fewer drug interactions. Still requires caution with MAOIs and monitoring for suicidal thoughts."
    },

    "Venlafaxine": {
        class: "Serotonin-Norepinephrine Reuptake Inhibitor (SNRI)",
        brandNames: "Effexor, Effexor XR",
        administration: "Oral",
        halfLife: "5 hours (11 hours for active metabolite)",
        uses: "Venlafaxine is used to treat major depressive disorder, generalized anxiety disorder, social anxiety disorder, and panic disorder.",
        dosage: "Immediate-release: 75 mg/day in 2-3 divided doses. Extended-release: 75 mg once daily. Maximum dose 225 mg/day.",
        sideEffects: [
            "Nausea",
            "Headache",
            "Insomnia",
            "Dry mouth",
            "Dizziness",
            "Sweating",
            "Increased blood pressure"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Warfarin", level: "medium", description: "May increase anticoagulant effect" },
            { drug: "Triptans", level: "medium", description: "Increased risk of serotonin syndrome" }
        ],
        safety: "Monitor blood pressure regularly. Associated with significant withdrawal symptoms; taper gradually. May increase risk of bleeding events."
    },

    "Duloxetine": {
        class: "Serotonin-Norepinephrine Reuptake Inhibitor (SNRI)",
        brandNames: "Cymbalta, Irenka",
        administration: "Oral",
        halfLife: "12 hours",
        uses: "Duloxetine is used to treat major depressive disorder, generalized anxiety disorder, diabetic neuropathy, fibromyalgia, and chronic musculoskeletal pain.",
        dosage: "For depression: 40-60 mg/day. Starting dose typically 30 mg once daily for one week, then 60 mg once daily.",
        sideEffects: [
            "Nausea",
            "Dry mouth",
            "Fatigue",
            "Dizziness",
            "Constipation",
            "Decreased appetite",
            "Increased sweating"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Anticoagulants", level: "medium", description: "Increased risk of bleeding" },
            { drug: "CYP1A2 inhibitors", level: "medium", description: "May increase duloxetine levels" }
        ],
        safety: "May cause liver injury. Avoid in patients with substantial alcohol use or chronic liver disease. Taper gradually when discontinuing."
    },

    "Desvenlafaxine": {
        class: "Serotonin-Norepinephrine Reuptake Inhibitor (SNRI)",
        brandNames: "Pristiq",
        administration: "Oral",
        halfLife: "11 hours",
        uses: "Desvenlafaxine is used to treat major depressive disorder.",
        dosage: "Recommended dose 50 mg once daily. Maximum dose 400 mg/day.",
        sideEffects: [
            "Nausea",
            "Dizziness",
            "Insomnia",
            "Hyperhidrosis",
            "Constipation",
            "Decreased appetite",
            "Anxiety"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Aspirin", level: "medium", description: "Increased risk of bleeding" },
            { drug: "Warfarin", level: "medium", description: "May increase anticoagulant effect" }
        ],
        safety: "Monitor blood pressure. May increase cholesterol levels. Taper gradually when discontinuing to avoid withdrawal symptoms."
    },

    "Bupropion": {
        class: "Atypical Antidepressant (NDRI)",
        brandNames: "Wellbutrin, Zyban",
        administration: "Oral",
        halfLife: "21 hours",
        uses: "Bupropion is used to treat major depressive disorder and seasonal affective disorder. Also used as smoking cessation aid.",
        dosage: "Initial dose 100 mg twice daily. Maximum dose 450 mg/day. Avoid single doses over 150 mg.",
        sideEffects: [
            "Dry mouth",
            "Insomnia",
            "Headache",
            "Nausea",
            "Constipation",
            "Anxiety",
            "Tremor"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Contraindicated" },
            { drug: "Other bupropion products", level: "high", description: "Do not use concurrently" },
            { drug: "CYP2B6 inhibitors", level: "medium", description: "May increase bupropion levels" }
        ],
        safety: "Contraindicated in patients with seizure disorder or eating disorders. Increased risk of seizures. May cause hypertension."
    },

    "Mirtazapine": {
        class: "Atypical Antidepressant (NaSSA)",
        brandNames: "Remeron",
        administration: "Oral",
        halfLife: "20-40 hours",
        uses: "Mirtazapine is used to treat major depressive disorder.",
        dosage: "Initial dose 15 mg once daily at bedtime. May increase to 45 mg/day.",
        sideEffects: [
            "Somnolence",
            "Increased appetite",
            "Weight gain",
            "Dizziness",
            "Dry mouth",
            "Constipation"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Benzodiazepines", level: "medium", description: "Increased sedative effects" },
            { drug: "Alcohol", level: "high", description: "Increased CNS depression" }
        ],
        safety: "May cause agranulocytosis. Monitor for signs of infection. Significant weight gain common. Less sexual side effects than SSRIs."
    },

    "Amitriptyline": {
        class: "Tricyclic Antidepressant (TCA)",
        brandNames: "Elavil",
        administration: "Oral",
        halfLife: "10-28 hours",
        uses: "Amitriptyline is used to treat depression. Also used for neuropathic pain, migraine prevention, and other chronic pain conditions.",
        dosage: "For depression: Initial dose 25-50 mg at bedtime. Maintenance dose 50-100 mg/day. Maximum dose 150 mg/day.",
        sideEffects: [
            "Dry mouth",
            "Blurred vision",
            "Constipation",
            "Urinary retention",
            "Drowsiness",
            "Orthostatic hypotension",
            "Weight gain"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "QT-prolonging drugs", level: "high", description: "Increased risk of arrhythmias" },
            { drug: "Anticholinergics", level: "medium", description: "Enhanced anticholinergic effects" }
        ],
        safety: "Overdose can be fatal. Use with caution in elderly patients. Monitor ECG in patients with cardiac risk factors. Gradual dose titration recommended."
    },

    "Nortriptyline": {
        class: "Tricyclic Antidepressant (TCA)",
        brandNames: "Pamelor",
        administration: "Oral",
        halfLife: "18-44 hours",
        uses: "Nortriptyline is used to treat depression. Also used for chronic pain, migraine prevention, and smoking cessation.",
        dosage: "Initial dose 25 mg 3-4 times daily. Maintenance dose 75-100 mg/day. Maximum dose 150 mg/day.",
        sideEffects: [
            "Dry mouth",
            "Constipation",
            "Blurred vision",
            "Dizziness",
            "Drowsiness",
            "Orthostatic hypotension"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Cimetidine", level: "medium", description: "May increase nortriptyline levels" },
            { drug: "Guanethidine", level: "medium", description: "May decrease antihypertensive effect" }
        ],
        safety: "Therapeutic drug monitoring recommended. Narrow therapeutic index. Use with caution in patients with cardiovascular disease."
    },

    "Imipramine": {
        class: "Tricyclic Antidepressant (TCA)",
        brandNames: "Tofranil",
        administration: "Oral",
        halfLife: "11-25 hours",
        uses: "Imipramine is used to treat depression. Also used for childhood enuresis and panic disorder.",
        dosage: "Initial dose 75 mg/day. Maintenance dose 50-150 mg/day. Maximum dose 200 mg/day for outpatients.",
        sideEffects: [
            "Dry mouth",
            "Constipation",
            "Blurred vision",
            "Drowsiness",
            "Orthostatic hypotension",
            "Weight gain",
            "Sexual dysfunction"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Clonidine", level: "high", description: "May reduce antihypertensive effect" },
            { drug: "Sympathomimetics", level: "medium", description: "Increased cardiovascular effects" }
        ],
        safety: "May lower seizure threshold. Use with caution in patients with glaucoma, urinary retention, or cardiovascular disease. Monitor blood pressure."
    },

    "Clomipramine": {
        class: "Tricyclic Antidepressant (TCA)",
        brandNames: "Anafranil",
        administration: "Oral",
        halfLife: "19-37 hours",
        uses: "Clomipramine is used primarily for obsessive-compulsive disorder. Also used for depression and other anxiety disorders.",
        dosage: "Initial dose 25 mg daily. Titrate to 100 mg/day during first 2 weeks. Maximum dose 250 mg/day.",
        sideEffects: [
            "Dry mouth",
            "Dizziness",
            "Constipation",
            "Weight gain",
            "Sexual dysfunction",
            "Sweating",
            "Tremor"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Phenobarbital", level: "medium", description: "May decrease clomipramine levels" },
            { drug: "Warfarin", level: "medium", description: "May increase anticoagulant effect" }
        ],
        safety: "High incidence of anticholinergic side effects. Monitor for seizures. Requires gradual dose titration and gradual discontinuation."
    },

    "Doxepin": {
        class: "Tricyclic Antidepressant (TCA)",
        brandNames: "Sinequan, Silenor",
        administration: "Oral",
        halfLife: "15 hours",
        uses: "Doxepin is used for depression and anxiety disorders. Low doses are used for insomnia.",
        dosage: "For depression: 75-150 mg/day. For insomnia: 3-6 mg at bedtime.",
        sideEffects: [
            "Drowsiness",
            "Dry mouth",
            "Blurred vision",
            "Constipation",
            "Weight gain",
            "Urinary retention"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Alcohol", level: "high", description: "Increased CNS depression" },
            { drug: "Cimetidine", level: "medium", description: "May increase doxepin levels" }
        ],
        safety: "Highly sedating. Use lower doses for insomnia. Avoid in patients with glaucoma or urinary retention. Overdose can be fatal."
    },

    "Maprotiline": {
        class: "Tetracyclic Antidepressant",
        brandNames: "Ludiomil",
        administration: "Oral",
        halfLife: "27-58 hours",
        uses: "Maprotiline is used to treat depression and anxiety associated with depression.",
        dosage: "Initial dose 75 mg/day. Maintenance dose 75-150 mg/day. Maximum dose 225 mg/day.",
        sideEffects: [
            "Drowsiness",
            "Dry mouth",
            "Constipation",
            "Blurred vision",
            "Dizziness",
            "Skin rash"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "QT-prolonging drugs", level: "high", description: "Increased risk of arrhythmias" },
            { drug: "Anticholinergics", level: "medium", description: "Enhanced anticholinergic effects" }
        ],
        safety: "Higher risk of seizures compared to other antidepressants. Use with caution in patients with seizure disorders. Gradual dose titration recommended."
    },

    "Trazodone": {
        class: "Serotonin Antagonist and Reuptake Inhibitor (SARI)",
        brandNames: "Desyrel",
        administration: "Oral",
        halfLife: "5-9 hours",
        uses: "Trazodone is used to treat major depressive disorder. Often used off-label for insomnia.",
        dosage: "For depression: 150 mg/day in divided doses. Maximum dose 400 mg/day for outpatients.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Dry mouth",
            "Nausea",
            "Headache",
            "Blurred vision",
            "Priapism (rare but serious)"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Alcohol", level: "high", description: "Increased CNS depression" },
            { drug: "Digoxin", level: "medium", description: "May increase digoxin levels" }
        ],
        safety: "Risk of priapism (prolonged erection). Discontinue if priapism occurs. Highly sedating; often used for insomnia at lower doses."
    },

    "Nefazodone": {
        class: "Serotonin Antagonist and Reuptake Inhibitor (SARI)",
        brandNames: "Serzone",
        administration: "Oral",
        halfLife: "2-4 hours",
        uses: "Nefazodone is used to treat major depressive disorder.",
        dosage: "Initial dose 100 mg twice daily. Maintenance dose 300-600 mg/day in divided doses.",
        sideEffects: [
            "Drowsiness",
            "Dry mouth",
            "Nausea",
            "Dizziness",
            "Constipation",
            "Blurred vision"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Pimozide", level: "high", description: "Contraindicated" },
            { drug: "Carbamazepine", level: "medium", description: "May decrease nefazodone levels" }
        ],
        safety: "Black box warning for hepatotoxicity. Liver function monitoring required. Less sexual side effects than SSRIs."
    },

    "Vilazodone": {
        class: "Serotonin Partial Agonist and Reuptake Inhibitor (SPARI)",
        brandNames: "Viibryd",
        administration: "Oral",
        halfLife: "25 hours",
        uses: "Vilazodone is used to treat major depressive disorder.",
        dosage: "Initial dose 10 mg once daily for 7 days, then 20 mg once daily for 7 days, then 40 mg once daily.",
        sideEffects: [
            "Diarrhea",
            "Nausea",
            "Insomnia",
            "Vomiting",
            "Dizziness",
            "Dry mouth"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Aspirin", level: "medium", description: "Increased risk of bleeding" },
            { drug: "Strong CYP3A4 inhibitors", level: "medium", description: "May increase vilazodone levels" }
        ],
        safety: "Must be taken with food to ensure adequate absorption. Monitor for diarrhea and gastrointestinal side effects."
    },

    "Vortioxetine": {
        class: "Multimodal Antidepressant",
        brandNames: "Trintellix, Brintellix",
        administration: "Oral",
        halfLife: "66 hours",
        uses: "Vortioxetine is used to treat major depressive disorder.",
        dosage: "Initial dose 10 mg once daily. May increase to 20 mg/day. Maximum dose 20 mg/day.",
        sideEffects: [
            "Nausea",
            "Constipation",
            "Vomiting",
            "Sexual dysfunction",
            "Dizziness",
            "Itching"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "NSAIDs", level: "medium", description: "Increased risk of bleeding" },
            { drug: "Strong CYP2D6 inhibitors", level: "medium", description: "May increase vortioxetine levels" }
        ],
        safety: "May cause less sexual dysfunction than SSRIs. Monitor for nausea, especially during initial treatment."
    },

    "Phenelzine": {
        class: "Monoamine Oxidase Inhibitor (MAOI)",
        brandNames: "Nardil",
        administration: "Oral",
        halfLife: "1.5-4 hours",
        uses: "Phenelzine is used for atypical depression and treatment-resistant depression.",
        dosage: "Initial dose 15 mg three times daily. Maximum dose 90 mg/day.",
        sideEffects: [
            "Orthostatic hypotension",
            "Dizziness",
            "Headache",
            "Dry mouth",
            "Constipation",
            "Weight gain",
            "Sedation"
        ],
        interactions: [
            { drug: "SSRIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Tyramine-rich foods", level: "high", description: "Risk of hypertensive crisis" },
            { drug: "Sympathomimetics", level: "high", description: "Risk of hypertensive crisis" }
        ],
        safety: "Requires strict dietary restrictions to avoid tyramine-containing foods. Washout period of 2 weeks needed when switching from other antidepressants."
    },

    "Tranylcypromine": {
        class: "Monoamine Oxidase Inhibitor (MAOI)",
        brandNames: "Parnate",
        administration: "Oral",
        halfLife: "2.5 hours",
        uses: "Tranylcypromine is used for atypical depression and treatment-resistant depression.",
        dosage: "Initial dose 10 mg twice daily. Maximum dose 60 mg/day.",
        sideEffects: [
            "Orthostatic hypotension",
            "Insomnia",
            "Dizziness",
            "Headache",
            "Dry mouth",
            "Constipation"
        ],
        interactions: [
            { drug: "SSRIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Tyramine-rich foods", level: "high", description: "Risk of hypertensive crisis" },
            { drug: "Meperidine", level: "high", description: "Risk of serotonin syndrome" }
        ],
        safety: "Strict dietary restrictions required. May cause stimulant-like effects. Monitor for hypertensive crises."
    },

    "Isocarboxazid": {
        class: "Monoamine Oxidase Inhibitor (MAOI)",
        brandNames: "Marplan",
        administration: "Oral",
        halfLife: "Not well characterized",
        uses: "Isocarboxazid is used for depression when other treatments have failed.",
        dosage: "Initial dose 10 mg twice daily. Maximum dose 60 mg/day.",
        sideEffects: [
            "Orthostatic hypotension",
            "Dizziness",
            "Headache",
            "Dry mouth",
            "Constipation",
            "Weight gain"
        ],
        interactions: [
            { drug: "SSRIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Tyramine-rich foods", level: "high", description: "Risk of hypertensive crisis" },
            { drug: "TCAs", level: "high", description: "Risk of serotonin syndrome" }
        ],
        safety: "Requires dietary restrictions. Use only when other antidepressants have failed due to significant interaction risks."
    },

    "Selegiline": {
        class: "Monoamine Oxidase Inhibitor (MAOI)",
        brandNames: "Emsam, Eldepryl",
        administration: "Transdermal, Oral",
        halfLife: "10 hours",
        uses: "Transdermal selegiline is used for major depressive disorder. Oral form used for Parkinson's disease.",
        dosage: "Transdermal: 6 mg/24 hours. Maximum 12 mg/24 hours.",
        sideEffects: [
            "Application site reaction",
            "Headache",
            "Insomnia",
            "Dry mouth",
            "Dizziness"
        ],
        interactions: [
            { drug: "SSRIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Tyramine-rich foods", level: "medium", description: "Lower risk with transdermal at doses ≤ 6 mg/24h" },
            { drug: "Meperidine", level: "high", description: "Contraindicated" }
        ],
        safety: "Transdermal form has fewer dietary restrictions at lower doses. Still requires caution with drug interactions."
    },

    "Moclobemide": {
        class: "Reversible Inhibitor of Monoamine Oxidase A (RIMA)",
        brandNames: "Aurorix, Manerix",
        administration: "Oral",
        halfLife: "1-2 hours",
        uses: "Moclobemide is used to treat depression and social anxiety disorder.",
        dosage: "Initial dose 300 mg/day in divided doses. Maximum dose 600 mg/day.",
        sideEffects: [
            "Nausea",
            "Headache",
            "Dizziness",
            "Insomnia",
            "Agitation",
            "Dry mouth"
        ],
        interactions: [
            { drug: "SSRIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Tyramine-rich foods", level: "low", description: "Minimal risk with normal dietary tyramine" },
            { drug: "Cimetidine", level: "medium", description: "May increase moclobemide levels" }
        ],
        safety: "Fewer dietary restrictions than traditional MAOIs. Still requires washout period when switching from other antidepressants."
    },

    "Agomelatine": {
        class: "Melatonin Receptor Agonist and Serotonin Antagonist",
        brandNames: "Valdoxan",
        administration: "Oral",
        halfLife: "1-2 hours",
        uses: "Agomelatine is used to treat major depressive disorder.",
        dosage: "Recommended dose 25 mg once daily at bedtime. May increase to 50 mg once daily after 2 weeks.",
        sideEffects: [
            "Headache",
            "Dizziness",
            "Nausea",
            "Somnolence",
            "Insomnia",
            "Fatigue"
        ],
        interactions: [
            { drug: "Strong CYP1A2 inhibitors", level: "high", description: "Contraindicated" },
            { drug: "Alcohol", level: "medium", description: "May enhance adverse effects" },
            { drug: "Fluvoxamine", level: "high", description: "Contraindicated" }
        ],
        safety: "Monitor liver function tests regularly. Contraindicated in patients with hepatic impairment. May improve sleep-wake cycle."
    },

    "Reboxetine": {
        class: "Selective Norepinephrine Reuptake Inhibitor (NRI)",
        brandNames: "Edronax",
        administration: "Oral",
        halfLife: "13 hours",
        uses: "Reboxetine is used to treat depression.",
        dosage: "Initial dose 4 mg twice daily. Maximum dose 10 mg/day.",
        sideEffects: [
            "Dry mouth",
            "Constipation",
            "Insomnia",
            "Sweating",
            "Dizziness",
            "Urinary hesitancy"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Ketoconazole", level: "medium", description: "May increase reboxetine levels" },
            { drug: "Macrolide antibiotics", level: "medium", description: "May increase reboxetine levels" }
        ],
        safety: "May cause urinary retention. Use with caution in elderly men with prostatic hypertrophy. Monitor for hypertension."
    },

    "Milnacipran": {
        class: "Serotonin-Norepinephrine Reuptake Inhibitor (SNRI)",
        brandNames: "Savella",
        administration: "Oral",
        halfLife: "6-8 hours",
        uses: "Milnacipran is used for fibromyalgia. Also used for depression in some countries.",
        dosage: "Initial dose 12.5 mg once, then 12.5 mg twice daily. Titrate to 50 mg twice daily.",
        sideEffects: [
            "Nausea",
            "Headache",
            "Constipation",
            "Dizziness",
            "Insomnia",
            "Hot flush",
            "Hyperhidrosis"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Epinephrine", level: "medium", description: "May potentiate cardiovascular effects" },
            { drug: "Clonidine", level: "medium", description: "May reduce antihypertensive effect" }
        ],
        safety: "Monitor blood pressure and heart rate. May increase liver enzymes. Use with caution in patients with hepatic or renal impairment."
    },

    "Levomilnacipran": {
        class: "Serotonin-Norepinephrine Reuptake Inhibitor (SNRI)",
        brandNames: "Fetzima",
        administration: "Oral",
        halfLife: "12 hours",
        uses: "Levomilnacipran is used to treat major depressive disorder.",
        dosage: "Initial dose 20 mg once daily for 2 days, then 40 mg once daily. Maximum dose 120 mg/day.",
        sideEffects: [
            "Nausea",
            "Constipation",
            "Hyperhidrosis",
            "Tachycardia",
            "Erectile dysfunction",
            "Increased heart rate"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Aspirin", level: "medium", description: "Increased risk of bleeding" },
            { drug: "Warfarin", level: "medium", description: "May increase anticoagulant effect" }
        ],
        safety: "Monitor blood pressure and heart rate. May cause urinary hesitation or retention. Use with caution in patients with cardiovascular disease."
    },

    "Dothiepin": {
        class: "Tricyclic Antidepressant (TCA)",
        brandNames: "Prothiaden",
        administration: "Oral",
        halfLife: "14-24 hours",
        uses: "Dothiepin is used to treat depression and anxiety.",
        dosage: "Initial dose 75 mg/day. Maintenance dose 75-150 mg/day. Maximum dose 225 mg/day.",
        sideEffects: [
            "Dry mouth",
            "Drowsiness",
            "Constipation",
            "Blurred vision",
            "Dizziness",
            "Weight gain"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Alcohol", level: "high", description: "Increased CNS depression" },
            { drug: "Anticholinergics", level: "medium", description: "Enhanced anticholinergic effects" }
        ],
        safety: "Sedating TCA, often used when sedation is desired. Overdose can be fatal. Use with caution in elderly patients."
    },

    "Trimipramine": {
        class: "Tricyclic Antidepressant (TCA)",
        brandNames: "Surmontil",
        administration: "Oral",
        halfLife: "16-40 hours",
        uses: "Trimipramine is used to treat depression.",
        dosage: "Initial dose 75 mg/day. Maintenance dose 50-150 mg/day. Maximum dose 200 mg/day.",
        sideEffects: [
            "Drowsiness",
            "Dry mouth",
            "Blurred vision",
            "Constipation",
            "Weight gain",
            "Orthostatic hypotension"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "QT-prolonging drugs", level: "high", description: "Increased risk of arrhythmias" },
            { drug: "Clonidine", level: "medium", description: "May reduce antihypertensive effect" }
        ],
        safety: "Highly sedating. Useful when sedation is desired. Monitor for orthostatic hypotension, especially in elderly patients."
    },

    "Protriptyline": {
        class: "Tricyclic Antidepressant (TCA)",
        brandNames: "Vivactil",
        administration: "Oral",
        halfLife: "54-92 hours",
        uses: "Protriptyline is used to treat depression. Also used for narcolepsy and cataplexy.",
        dosage: "Initial dose 15-40 mg/day in divided doses. Maximum dose 60 mg/day.",
        sideEffects: [
            "Insomnia",
            "Anxiety",
            "Agitation",
            "Dry mouth",
            "Constipation",
            "Urinary retention"
        ],
        interactions: [
            { drug: "MAOIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Sympathomimetics", level: "medium", description: "Increased cardiovascular effects" },
            { drug: "Cimetidine", level: "medium", description: "May increase protriptyline levels" }
        ],
        safety: "Activating TCA, may cause insomnia. Use with caution in patients with cardiovascular disease. Monitor for anticholinergic side effects."
    },
    "Diazepam": {
        class: "Benzodiazepine",
        brandNames: "Valium, Diastat",
        administration: "Oral, IV, IM, Rectal",
        halfLife: "20-50 hours",
        uses: "Diazepam is used to treat anxiety disorders, alcohol withdrawal symptoms, or muscle spasms. It may also be used to treat certain types of seizures.",
        dosage: "For anxiety: 2-10 mg 2-4 times daily. For muscle spasms: 2-10 mg 3-4 times daily. Maximum daily dose: 40 mg.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Fatigue",
            "Muscle weakness",
            "Memory problems",
            "Slurred speech"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Increased CNS depression and respiratory depression" },
            { drug: "Opioids", level: "high", description: "Profound sedation, respiratory depression, coma" },
            { drug: "Other benzodiazepines", level: "high", description: "Additive CNS depression" },
            { drug: "Antidepressants", level: "medium", description: "Increased sedation" }
        ],
        safety: "Risk of dependence and withdrawal symptoms with long-term use. Avoid abrupt discontinuation. Not recommended for elderly patients due to fall risk."
    },

    "Lorazepam": {
        class: "Benzodiazepine",
        brandNames: "Ativan",
        administration: "Oral, IV, IM",
        halfLife: "10-20 hours",
        uses: "Lorazepam is used for the management of anxiety disorders, short-term relief of anxiety symptoms, and pre-anesthetic medication.",
        dosage: "For anxiety: 2-3 mg daily in divided doses. Maximum daily dose: 10 mg. For insomnia: 2-4 mg at bedtime.",
        sideEffects: [
            "Sedation",
            "Dizziness",
            "Weakness",
            "Unsteadiness",
            "Memory impairment",
            "Headache"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Severe CNS depression" },
            { drug: "Opioids", level: "high", description: "Respiratory depression and sedation" },
            { drug: "Clozapine", level: "high", description: "Risk of respiratory depression" },
            { drug: "Probenecid", level: "medium", description: "Increased lorazepam levels" }
        ],
        safety: "May cause physical and psychological dependence. Withdrawal symptoms can occur after prolonged use. Use with caution in patients with respiratory conditions."
    },

    "Alprazolam": {
        class: "Benzodiazepine",
        brandNames: "Xanax, Xanax XR",
        administration: "Oral",
        halfLife: "11-16 hours",
        uses: "Alprazolam is used to treat anxiety and panic disorders. It may also be used for premenstrual syndrome and depression.",
        dosage: "For anxiety: 0.25-0.5 mg three times daily. Maximum daily dose: 4 mg. For panic disorder: 1-10 mg daily in divided doses.",
        sideEffects: [
            "Drowsiness",
            "Light-headedness",
            "Headache",
            "Dry mouth",
            "Constipation",
            "Changes in appetite"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Increased CNS depression" },
            { drug: "Ketoconazole", level: "high", description: "Significantly increased alprazolam levels" },
            { drug: "Cimetidine", level: "medium", description: "Increased alprazolam concentrations" },
            { drug: "Oral contraceptives", level: "medium", description: "Increased alprazolam levels" }
        ],
        safety: "High potential for abuse and dependence. Withdrawal symptoms can be severe. Do not stop abruptly after long-term use."
    },

    "Clonazepam": {
        class: "Benzodiazepine",
        brandNames: "Klonopin",
        administration: "Oral",
        halfLife: "30-40 hours",
        uses: "Clonazepam is used to treat seizure disorders and panic disorder. It may also be used for restless legs syndrome.",
        dosage: "For panic disorder: 0.25 mg twice daily, increased to 1 mg daily. Maximum daily dose: 4 mg. For seizures: 1.5 mg daily in divided doses.",
        sideEffects: [
            "Drowsiness",
            "Coordination problems",
            "Depression",
            "Memory problems",
            "Fatigue",
            "Dizziness"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Severe CNS depression" },
            { drug: "Opioids", level: "high", description: "Respiratory depression" },
            { drug: "Phenobarbital", level: "medium", description: "Increased sedation" },
            { drug: "Valproic acid", level: "medium", description: "May increase clonazepam levels" }
        ],
        safety: "Risk of tolerance and dependence. Withdrawal symptoms may occur after discontinuation. Use with caution in patients with liver disease."
    },

    "Oxazepam": {
        class: "Benzodiazepine",
        brandNames: "Serax",
        administration: "Oral",
        halfLife: "5-15 hours",
        uses: "Oxazepam is used for the management of anxiety disorders, anxiety associated with depression, and alcohol withdrawal.",
        dosage: "For mild to moderate anxiety: 10-15 mg 3-4 times daily. For severe anxiety: 15-30 mg 3-4 times daily. Maximum daily dose: 120 mg.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Headache",
            "Vertigo",
            "Syncope",
            "Slurred speech"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Increased CNS depression" },
            { drug: "Disulfiram", level: "medium", description: "Increased oxazepam effects" },
            { drug: "Probenecid", level: "medium", description: "May increase oxazepam levels" },
            { drug: "Theophylline", level: "medium", description: "May decrease oxazepam effectiveness" }
        ],
        safety: "Preferred in elderly patients due to shorter half-life. Lower risk of accumulation. Still has potential for dependence."
    },

    "Chlordiazepoxide": {
        class: "Benzodiazepine",
        brandNames: "Librium",
        administration: "Oral, IM, IV",
        halfLife: "5-30 hours",
        uses: "Chlordiazepoxide is used for the management of anxiety disorders, alcohol withdrawal symptoms, and pre-operative apprehension.",
        dosage: "For mild to moderate anxiety: 5-10 mg 3-4 times daily. For severe anxiety: 20-25 mg 3-4 times daily. For alcohol withdrawal: 50-100 mg initially.",
        sideEffects: [
            "Drowsiness",
            "Confusion",
            "Ataxia",
            "Hypotension",
            "Changes in libido",
            "Jaundice"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Severe CNS depression" },
            { drug: "Cimetidine", level: "medium", description: "Increased chlordiazepoxide levels" },
            { drug: "Disulfiram", level: "medium", description: "Increased sedative effects" },
            { drug: "Levodopa", level: "medium", description: "Reduced therapeutic effect" }
        ],
        safety: "One of the first benzodiazepines developed. High risk of dependence with long-term use. Monitor liver function during therapy."
    },

    "Buspirone": {
        class: "Azapirone",
        brandNames: "Buspar",
        administration: "Oral",
        halfLife: "2-3 hours",
        uses: "Buspirone is used for the management of anxiety disorders. It may take several weeks to show full therapeutic effect.",
        dosage: "Initial dose: 7.5 mg twice daily. May increase by 5 mg daily every 2-3 days. Maximum daily dose: 60 mg.",
        sideEffects: [
            "Dizziness",
            "Headache",
            "Nausea",
            "Nervousness",
            "Lightheadedness",
            "Excitement"
        ],
        interactions: [
            { drug: "MAO inhibitors", level: "high", description: "Risk of hypertension" },
            { drug: "Grapefruit juice", level: "medium", description: "Increased buspirone levels" },
            { drug: "Diltiazem", level: "medium", description: "Increased buspirone concentrations" },
            { drug: "Verapamil", level: "medium", description: "Increased buspirone levels" }
        ],
        safety: "Not addictive like benzodiazepines. Does not cause sedation or cognitive impairment. Takes 2-4 weeks to show full effect."
    },

    "Hydroxyzine": {
        class: "Antihistamine",
        brandNames: "Vistaril, Atarax",
        administration: "Oral, IM",
        halfLife: "3-7 hours",
        uses: "Hydroxyzine is used for the treatment of anxiety, tension, pruritus, and as pre-operative sedation.",
        dosage: "For anxiety: 50-100 mg 4 times daily. Maximum daily dose: 400 mg. For pruritus: 25 mg 3-4 times daily.",
        sideEffects: [
            "Drowsiness",
            "Dry mouth",
            "Headache",
            "Dizziness",
            "Blurred vision",
            "Constipation"
        ],
        interactions: [
            { drug: "CNS depressants", level: "high", description: "Additive sedation" },
            { drug: "Alcohol", level: "high", description: "Increased CNS depression" },
            { drug: "MAO inhibitors", level: "medium", description: "Increased anticholinergic effects" },
            { drug: "Anticholinergics", level: "medium", description: "Enhanced side effects" }
        ],
        safety: "Less risk of dependence compared to benzodiazepines. May cause QT prolongation. Use with caution in elderly patients."
    },

    "Propranolol": {
        class: "Beta-blocker",
        brandNames: "Inderal, InnoPran XL",
        administration: "Oral, IV",
        halfLife: "3-6 hours",
        uses: "Propranolol is used for performance anxiety, essential tremor, hypertension, angina, and migraine prevention.",
        dosage: "For anxiety: 10-40 mg 3-4 times daily. For migraine: 80-240 mg daily in divided doses. Maximum daily dose: 320 mg.",
        sideEffects: [
            "Fatigue",
            "Dizziness",
            "Cold extremities",
            "Bradycardia",
            "Depression",
            "Insomnia"
        ],
        interactions: [
            { drug: "Calcium channel blockers", level: "high", description: "Severe bradycardia and heart block" },
            { drug: "Insulin", level: "high", description: "Masked hypoglycemia symptoms" },
            { drug: "Theophylline", level: "medium", description: "Mutual inhibition of effects" },
            { drug: "NSAIDs", level: "medium", description: "Reduced antihypertensive effect" }
        ],
        safety: "Do not stop abruptly - may cause rebound hypertension. Contraindicated in asthma, severe COPD, and heart block."
    },

    "Pregabalin": {
        class: "Gabapentinoid",
        brandNames: "Lyrica",
        administration: "Oral",
        halfLife: "6.3 hours",
        uses: "Pregabalin is used for neuropathic pain, fibromyalgia, and generalized anxiety disorder.",
        dosage: "For anxiety: 150-600 mg daily in 2-3 divided doses. Maximum daily dose: 600 mg. Start with 150 mg daily.",
        sideEffects: [
            "Dizziness",
            "Somnolence",
            "Dry mouth",
            "Edema",
            "Blurred vision",
            "Weight gain"
        ],
        interactions: [
            { drug: "CNS depressants", level: "high", description: "Additive CNS depression" },
            { drug: "Alcohol", level: "high", description: "Increased dizziness and drowsiness" },
            { drug: "Thiazolidinediones", level: "medium", description: "May enhance fluid retention" },
            { drug: "ACE inhibitors", level: "medium", description: "Increased risk of angioedema" }
        ],
        safety: "May cause dependence and withdrawal symptoms. Requires gradual dose reduction when discontinuing. Monitor for edema and weight gain."
    },

    "Gabapentin": {
        class: "Gabapentinoid",
        brandNames: "Neurontin, Gralise",
        administration: "Oral",
        halfLife: "5-7 hours",
        uses: "Gabapentin is used for neuropathic pain, seizures, and sometimes for anxiety disorders.",
        dosage: "For anxiety: 300-1200 mg three times daily. Maximum daily dose: 3600 mg. Start with 300 mg three times daily.",
        sideEffects: [
            "Dizziness",
            "Fatigue",
            "Drowsiness",
            "Peripheral edema",
            "Ataxia",
            "Nystagmus"
        ],
        interactions: [
            { drug: "CNS depressants", level: "high", description: "Increased sedation" },
            { drug: "Antacids", level: "medium", description: "Reduced gabapentin absorption" },
            { drug: "Morphine", level: "medium", description: "Increased gabapentin concentrations" },
            { drug: "Alcohol", level: "medium", description: "Enhanced CNS depression" }
        ],
        safety: "Requires renal dose adjustment. Withdrawal symptoms may occur with abrupt discontinuation. May cause suicidal thoughts."
    },

    "Etifoxine": {
        class: "Non-benzodiazepine anxiolytic",
        brandNames: "Stresam",
        administration: "Oral",
        halfLife: "6-8 hours",
        uses: "Etifoxine is used for the treatment of anxiety disorders with somatic symptoms.",
        dosage: "50 mg three times daily. Maximum daily dose: 150 mg. Treatment duration typically 2-12 weeks.",
        sideEffects: [
            "Mild drowsiness",
            "Gastrointestinal discomfort",
            "Skin reactions",
            "Headache",
            "Dizziness"
        ],
        interactions: [
            { drug: "Alcohol", level: "medium", description: "Enhanced sedative effects" },
            { drug: "CNS depressants", level: "medium", description: "Additive sedation" },
            { drug: "Hepatotoxic drugs", level: "medium", description: "Increased liver toxicity risk" }
        ],
        safety: "Not available in all countries. Lower risk of dependence compared to benzodiazepines. Monitor liver function during treatment."
    },

    "Bromazepam": {
        class: "Benzodiazepine",
        brandNames: "Lexotan, Lexomil",
        administration: "Oral",
        halfLife: "12-20 hours",
        uses: "Bromazepam is used for short-term management of severe anxiety and panic attacks.",
        dosage: "1.5-6 mg 2-3 times daily. Maximum daily dose: 18 mg. Start with lowest effective dose.",
        sideEffects: [
            "Drowsiness",
            "Sedation",
            "Memory impairment",
            "Muscle weakness",
            "Confusion",
            "Depression"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Severe CNS depression" },
            { drug: "Opioids", level: "high", description: "Respiratory depression" },
            { drug: "Antidepressants", level: "medium", description: "Increased sedation" },
            { drug: "Antipsychotics", level: "medium", description: "Enhanced CNS effects" }
        ],
        safety: "High potential for dependence. Withdrawal symptoms can be severe. Not recommended for long-term use."
    },

    "Midazolam": {
        class: "Benzodiazepine",
        brandNames: "Versed",
        administration: "IV, IM, Oral, Intranasal",
        halfLife: "1.5-2.5 hours",
        uses: "Midazolam is used for procedural sedation, pre-anesthetic medication, and status epilepticus.",
        dosage: "For procedural sedation: 0.5-2 mg IV. Pre-op: 2-5 mg IM. Maximum single dose: 10 mg.",
        sideEffects: [
            "Respiratory depression",
            "Hypotension",
            "Hiccups",
            "Nausea",
            "Headache",
            "Oversedation"
        ],
        interactions: [
            { drug: "Opioids", level: "high", description: "Severe respiratory depression" },
            { drug: "Protease inhibitors", level: "high", description: "Dramatically increased midazolam levels" },
            { drug: "Erythromycin", level: "high", description: "Increased sedation and respiratory depression" },
            { drug: "Alcohol", level: "high", description: "Life-threatening respiratory depression" }
        ],
        safety: "Only for use in monitored settings. High risk of respiratory depression. Contraindicated in acute narrow-angle glaucoma."
    },

    "Nitrazepam": {
        class: "Benzodiazepine",
        brandNames: "Mogadon",
        administration: "Oral",
        halfLife: "16-48 hours",
        uses: "Nitrazepam is used primarily for short-term treatment of severe insomnia and sometimes for anxiety.",
        dosage: "5-10 mg at bedtime. Maximum daily dose: 10 mg. Elderly: 2.5-5 mg at bedtime.",
        sideEffects: [
            "Morning drowsiness",
            "Dizziness",
            "Confusion",
            "Memory impairment",
            "Headache",
            "Gastrointestinal upset"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Severe CNS depression" },
            { drug: "Opioids", level: "high", description: "Respiratory depression" },
            { drug: "Other CNS depressants", level: "high", description: "Additive sedation" },
            { drug: "Disulfiram", level: "medium", description: "Increased nitrazepam effects" }
        ],
        safety: "High risk of dependence and tolerance. Withdrawal insomnia may occur. Not recommended for long-term use."
    },

    "Temazepam": {
        class: "Benzodiazepine",
        brandNames: "Restoril",
        administration: "Oral",
        halfLife: "8-20 hours",
        uses: "Temazepam is used for short-term treatment of insomnia and sometimes for anxiety-related sleep disturbances.",
        dosage: "7.5-30 mg at bedtime. Maximum daily dose: 30 mg. Start with lowest effective dose.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Lethargy",
            "Headache",
            "Nausea",
            "Dry mouth"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Severe CNS depression" },
            { drug: "Opioids", level: "high", description: "Respiratory depression" },
            { drug: "Antidepressants", level: "medium", description: "Increased sedation" },
            { drug: "Antipsychotics", level: "medium", description: "Enhanced CNS effects" }
        ],
        safety: "Schedule IV controlled substance. Risk of dependence and withdrawal. Avoid alcohol during treatment."
    },

    "Lofepramine": {
        class: "Tricyclic antidepressant",
        brandNames: "Lomont, Gamanil",
        administration: "Oral",
        halfLife: "1.5-6 hours",
        uses: "Lofepramine is used for the treatment of depression and sometimes for anxiety associated with depression.",
        dosage: "70-210 mg daily in divided doses. Maximum daily dose: 210 mg. Start with 70 mg twice daily.",
        sideEffects: [
            "Dry mouth",
            "Constipation",
            "Blurred vision",
            "Drowsiness",
            "Dizziness",
            "Weight gain"
        ],
        interactions: [
            { drug: "MAO inhibitors", level: "high", description: "Hypertensive crisis" },
            { drug: "Sympathomimetics", level: "high", description: "Hypertension and arrhythmias" },
            { drug: "Anticholinergics", level: "medium", description: "Enhanced side effects" },
            { drug: "Alcohol", level: "medium", description: "Increased sedation" }
        ],
        safety: "May take 2-4 weeks for full antidepressant effect. Risk of suicidal thoughts initially. Monitor for cardiac effects."
    },

    "Meprobamate": {
        class: "Carbamate",
        brandNames: "Miltown, Equanil",
        administration: "Oral",
        halfLife: "6-17 hours",
        uses: "Meprobamate is used for short-term management of anxiety disorders.",
        dosage: "400 mg 3-4 times daily. Maximum daily dose: 2400 mg. Not recommended for long-term use.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Headache",
            "Nausea",
            "Rash",
            "Blood dyscrasias"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Severe CNS depression" },
            { drug: "Opioids", level: "high", description: "Respiratory depression" },
            { drug: "Other CNS depressants", level: "high", description: "Additive effects" },
            { drug: "Oral anticoagulants", level: "medium", description: "Altered anticoagulant effect" }
        ],
        safety: "High potential for abuse and dependence. Withdrawal can be severe. Rare but serious blood dyscrasias possible."
    },

    "Clorazepate": {
        class: "Benzodiazepine",
        brandNames: "Tranxene",
        administration: "Oral",
        halfLife: "30-100 hours",
        uses: "Clorazepate is used for anxiety disorders, alcohol withdrawal, and partial seizures.",
        dosage: "For anxiety: 15-60 mg daily in divided doses. Maximum daily dose: 90 mg. Start with 7.5 mg 2-3 times daily.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Blurred vision",
            "Headache",
            "Gastrointestinal upset",
            "Memory problems"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Severe CNS depression" },
            { drug: "Opioids", level: "high", description: "Respiratory depression" },
            { drug: "Cimetidine", level: "medium", description: "Increased clorazepate levels" },
            { drug: "Oral contraceptives", level: "medium", description: "Increased benzodiazepine effects" }
        ],
        safety: "Long half-life may cause accumulation. Risk of dependence. Withdrawal symptoms may be delayed due to long half-life."
    },

    "Phenibut": {
        class: "GABA analogue",
        brandNames: "Noofen, Fenibut",
        administration: "Oral",
        halfLife: "5-6 hours",
        uses: "Phenibut is used for anxiety, insomnia, and sometimes for post-traumatic stress disorder.",
        dosage: "250-500 mg 3 times daily. Maximum daily dose: 2500 mg. Not for long-term use.",
        sideEffects: [
            "Drowsiness",
            "Nausea",
            "Headache",
            "Dizziness",
            "Hangover effect",
            "Tolerance"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Severe CNS depression" },
            { drug: "Benzodiazepines", level: "high", description: "Enhanced sedation" },
            { drug: "Opioids", level: "high", description: "Respiratory depression" },
            { drug: "Other CNS depressants", level: "high", description: "Additive effects" }
        ],
        safety: "High risk of dependence and severe withdrawal. Not FDA-approved in the US. Use with extreme caution."
    },

    "Flurazepam": {
        class: "Benzodiazepine",
        brandNames: "Dalmane",
        administration: "Oral",
        halfLife: "40-250 hours",
        uses: "Flurazepam is used for the treatment of insomnia characterized by difficulty falling asleep or staying asleep.",
        dosage: "15-30 mg at bedtime. Maximum daily dose: 30 mg. Elderly: 15 mg at bedtime.",
        sideEffects: [
            "Morning drowsiness",
            "Dizziness",
            "Staggering",
            "Headache",
            "Heartburn",
            "Dry mouth"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Severe CNS depression" },
            { drug: "Opioids", level: "high", description: "Respiratory depression" },
            { drug: "Cimetidine", level: "medium", description: "Increased flurazepam levels" },
            { drug: "Disulfiram", level: "medium", description: "Enhanced sedative effects" }
        ],
        safety: "Very long half-life - not recommended for elderly patients. High risk of accumulation. Severe withdrawal possible."
    },
    "Risperidone": {
        class: "Atypical Antipsychotic",
        brandNames: "Risperdal, Risperdal Consta",
        administration: "Oral, Injectable",
        halfLife: "20 hours",
        uses: "Risperidone is used to treat schizophrenia, bipolar disorder, and irritability associated with autistic disorder.",
        dosage: "For schizophrenia: Start 1-2 mg twice daily, increase to 4-8 mg/day. For bipolar: 2-3 mg once daily. Maximum 16 mg/day.",
        sideEffects: [
            "Drowsiness or sedation",
            "Dizziness",
            "Weight gain",
            "Increased prolactin levels",
            "Extrapyramidal symptoms",
            "Headache",
            "Anxiety"
        ],
        interactions: [
            { drug: "Carbamazepine", level: "high", description: "Decreases risperidone levels" },
            { drug: "Fluoxetine", level: "medium", description: "Increases risperidone levels" },
            { drug: "Other CNS depressants", level: "high", description: "Enhanced sedative effects" },
            { drug: "Antihypertensives", level: "medium", description: "May increase hypotensive effects" }
        ],
        safety: "May increase mortality in elderly patients with dementia-related psychosis. Monitor for neuroleptic malignant syndrome and tardive dyskinesia."
    },

    "Olanzapine": {
        class: "Atypical Antipsychotic",
        brandNames: "Zyprexa, Zyprexa Zydis",
        administration: "Oral, Injectable",
        halfLife: "21-54 hours",
        uses: "Olanzapine is used to treat schizophrenia, bipolar disorder, and as an adjunct in treatment-resistant depression.",
        dosage: "For schizophrenia: Start 5-10 mg once daily, range 10-20 mg/day. For bipolar: 5-20 mg/day. Maximum 20 mg/day.",
        sideEffects: [
            "Weight gain",
            "Drowsiness",
            "Dry mouth",
            "Increased appetite",
            "Dizziness",
            "Constipation",
            "Elevated blood sugar"
        ],
        interactions: [
            { drug: "Carbamazepine", level: "high", description: "Decreases olanzapine levels" },
            { drug: "Fluvoxamine", level: "medium", description: "Increases olanzapine levels" },
            { drug: "Benzodiazepines", level: "high", description: "Increased risk of sedation and respiratory depression" },
            { drug: "Antihypertensives", level: "medium", description: "May enhance hypotensive effects" }
        ],
        safety: "Increased risk of hyperglycemia and diabetes. Monitor weight, blood glucose, and lipid profile regularly. Not for dementia-related psychosis."
    },

    "Quetiapine": {
        class: "Atypical Antipsychotic",
        brandNames: "Seroquel, Seroquel XR",
        administration: "Oral",
        halfLife: "6 hours",
        uses: "Quetiapine is used to treat schizophrenia, bipolar disorder, and as adjunct treatment for major depressive disorder.",
        dosage: "For schizophrenia: Start 25 mg twice daily, increase to 300-800 mg/day. For bipolar: 400-800 mg/day. For depression: 150-300 mg/day.",
        sideEffects: [
            "Drowsiness",
            "Dry mouth",
            "Dizziness",
            "Constipation",
            "Weight gain",
            "Increased heart rate",
            "Cataracts (long-term use)"
        ],
        interactions: [
            { drug: "CYP3A4 inhibitors", level: "high", description: "Increase quetiapine levels" },
            { drug: "CYP3A4 inducers", level: "high", description: "Decrease quetiapine levels" },
            { drug: "Antihypertensives", level: "medium", description: "May enhance hypotensive effects" },
            { drug: "CNS depressants", level: "high", description: "Enhanced sedative effects" }
        ],
        safety: "Monitor for cataracts with long-term use. May cause orthostatic hypotension. Risk of hyperglycemia and dyslipidemia."
    },

    "Aripiprazole": {
        class: "Atypical Antipsychotic",
        brandNames: "Abilify, Abilify Maintena",
        administration: "Oral, Injectable",
        halfLife: "75 hours",
        uses: "Aripiprazole is used to treat schizophrenia, bipolar disorder, major depressive disorder, and irritability associated with autism.",
        dosage: "For schizophrenia: Start 10-15 mg once daily, range 10-30 mg/day. For bipolar: 15-30 mg/day. Maximum 30 mg/day.",
        sideEffects: [
            "Headache",
            "Anxiety",
            "Insomnia",
            "Nausea",
            "Vomiting",
            "Constipation",
            "Dizziness",
            "Akathisia"
        ],
        interactions: [
            { drug: "CYP3A4 inhibitors", level: "medium", description: "Increase aripiprazole levels" },
            { drug: "CYP2D6 inhibitors", level: "medium", description: "Increase aripiprazole levels" },
            { drug: "Carbamazepine", level: "high", description: "Decreases aripiprazole levels" },
            { drug: "Antihypertensives", level: "medium", description: "May enhance hypotensive effects" }
        ],
        safety: "May increase suicidal thoughts in children and young adults. Monitor for neuroleptic malignant syndrome and tardive dyskinesia."
    },

    "Ziprasidone": {
        class: "Atypical Antipsychotic",
        brandNames: "Geodon",
        administration: "Oral, Injectable",
        halfLife: "7 hours",
        uses: "Ziprasidone is used to treat schizophrenia and acute manic or mixed episodes associated with bipolar disorder.",
        dosage: "For schizophrenia: Start 20 mg twice daily with food, range 40-160 mg/day. For bipolar: 40-80 mg twice daily. Maximum 160 mg/day.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Nausea",
            "Constipation",
            "Akathisia",
            "Respiratory tract infection",
            "ECG changes (QT prolongation)"
        ],
        interactions: [
            { drug: "QT-prolonging drugs", level: "high", description: "Increased risk of cardiac arrhythmias" },
            { drug: "Carbamazepine", level: "high", description: "Decreases ziprasidone levels" },
            { drug: "Ketoconazole", level: "medium", description: "Increases ziprasidone levels" },
            { drug: "Antihypertensives", level: "medium", description: "May enhance hypotensive effects" }
        ],
        safety: "Contraindicated in patients with known QT prolongation. Monitor ECG in patients with cardiac risk factors. Take with food for optimal absorption."
    },

    "Clozapine": {
        class: "Atypical Antipsychotic",
        brandNames: "Clozaril, Versacloz, Fazaclo",
        administration: "Oral",
        halfLife: "12 hours",
        uses: "Clozapine is used for treatment-resistant schizophrenia and to reduce suicidal behavior in schizophrenia or schizoaffective disorder.",
        dosage: "Start 12.5 mg once or twice daily, increase gradually to 300-900 mg/day. Must follow REMS program requirements.",
        sideEffects: [
            "Sedation",
            "Drooling",
            "Dizziness",
            "Constipation",
            "Tachycardia",
            "Weight gain",
            "Agranulocytosis (risk requires monitoring)"
        ],
        interactions: [
            { drug: "Bone marrow suppressants", level: "high", description: "Increased risk of agranulocytosis" },
            { drug: "CNS depressants", level: "high", description: "Enhanced sedative effects" },
            { drug: "Fluvoxamine", level: "high", description: "Significantly increases clozapine levels" },
            { drug: "Carbamazepine", level: "high", description: "Decreases clozapine levels and increases agranulocytosis risk" }
        ],
        safety: "REMS program required due to risk of agranulocytosis. Weekly blood monitoring for first 6 months, then biweekly. Monitor for myocarditis and seizures."
    },

    "Haloperidol": {
        class: "Typical Antipsychotic",
        brandNames: "Haldol, Haloperidol Decanoate",
        administration: "Oral, Injectable",
        halfLife: "12-36 hours",
        uses: "Haloperidol is used to treat psychotic disorders, Tourette's syndrome, and severe behavioral problems in children.",
        dosage: "For psychosis: 0.5-5 mg 2-3 times daily, range 1-100 mg/day. For agitation: 2-5 mg IM every 4-8 hours.",
        sideEffects: [
            "Extrapyramidal symptoms",
            "Akathisia",
            "Dystonia",
            "Sedation",
            "Dry mouth",
            "Constipation",
            "QT prolongation",
            "Tardive dyskinesia"
        ],
        interactions: [
            { drug: "QT-prolonging drugs", level: "high", description: "Increased risk of cardiac arrhythmias" },
            { drug: "Carbamazepine", level: "medium", description: "Decreases haloperidol levels" },
            { drug: "Fluoxetine", level: "medium", description: "Increases haloperidol levels" },
            { drug: "Lithium", level: "medium", description: "Increased risk of neurotoxicity" }
        ],
        safety: "High risk of extrapyramidal symptoms and tardive dyskinesia. Monitor ECG for QT prolongation. Use lowest effective dose for shortest duration."
    },

    "Fluphenazine": {
        class: "Typical Antipsychotic",
        brandNames: "Prolixin, Permitil",
        administration: "Oral, Injectable",
        halfLife: "15 hours",
        uses: "Fluphenazine is used to treat psychotic disorders such as schizophrenia.",
        dosage: "Oral: Start 2.5-10 mg/day in divided doses, maintenance 1-5 mg/day. IM: 12.5-25 mg every 1-4 weeks.",
        sideEffects: [
            "Extrapyramidal symptoms",
            "Akathisia",
            "Dystonia",
            "Sedation",
            "Dry mouth",
            "Blurred vision",
            "Constipation",
            "Tardive dyskinesia"
        ],
        interactions: [
            { drug: "Anticholinergic drugs", level: "medium", description: "May reduce antipsychotic efficacy" },
            { drug: "CNS depressants", level: "high", description: "Enhanced sedative effects" },
            { drug: "Lithium", level: "medium", description: "Increased risk of neurotoxicity" },
            { drug: "Propranolol", level: "medium", description: "Increases fluphenazine levels" }
        ],
        safety: "High risk of extrapyramidal symptoms. Monitor for neuroleptic malignant syndrome. Use caution in elderly patients with dementia."
    },

    "Chlorpromazine": {
        class: "Typical Antipsychotic",
        brandNames: "Thorazine, Largactil",
        administration: "Oral, Injectable, Rectal",
        halfLife: "30 hours",
        uses: "Chlorpromazine is used to treat psychotic disorders, nausea and vomiting, preoperative anxiety, and intractable hiccups.",
        dosage: "For psychosis: 10-25 mg 2-4 times daily, range 30-800 mg/day. For nausea: 10-25 mg every 4-6 hours.",
        sideEffects: [
            "Sedation",
            "Orthostatic hypotension",
            "Dry mouth",
            "Blurred vision",
            "Constipation",
            "Photosensitivity",
            "Extrapyramidal symptoms",
            "Jaundice"
        ],
        interactions: [
            { drug: "CNS depressants", level: "high", description: "Enhanced sedative effects" },
            { drug: "Anticholinergic drugs", level: "medium", description: "Increased anticholinergic effects" },
            { drug: "Epinephrine", level: "high", description: "Paradoxical hypotension" },
            { drug: "Propranolol", level: "medium", description: "Increased levels of both drugs" }
        ],
        safety: "May cause pigmentary retinopathy with long-term high doses. Risk of agranulocytosis. Avoid sun exposure due to photosensitivity."
    },

    "Paliperidone": {
        class: "Atypical Antipsychotic",
        brandNames: "Invega, Invega Sustenna, Invega Trinza",
        administration: "Oral, Injectable",
        halfLife: "23 hours",
        uses: "Paliperidone is used to treat schizophrenia and schizoaffective disorder.",
        dosage: "Oral: Start 6 mg once daily, range 3-12 mg/day. Injectable: 39-234 mg monthly based on formulation.",
        sideEffects: [
            "Headache",
            "Drowsiness",
            "Dizziness",
            "Akathisia",
            "Weight gain",
            "Increased prolactin",
            "Tachycardia",
            "Extrapyramidal symptoms"
        ],
        interactions: [
            { drug: "QT-prolonging drugs", level: "high", description: "Increased risk of cardiac arrhythmias" },
            { drug: "Carbamazepine", level: "high", description: "Decreases paliperidone levels" },
            { drug: "Paroxetine", level: "medium", description: "Increases paliperidone levels" },
            { drug: "Antihypertensives", level: "medium", description: "May enhance hypotensive effects" }
        ],
        safety: "May increase mortality in elderly patients with dementia-related psychosis. Monitor for QT prolongation and metabolic changes."
    },

    "Lurasidone": {
        class: "Atypical Antipsychotic",
        brandNames: "Latuda",
        administration: "Oral",
        halfLife: "18 hours",
        uses: "Lurasidone is used to treat schizophrenia and depressive episodes associated with bipolar disorder.",
        dosage: "For schizophrenia: Start 40 mg once daily, range 40-160 mg/day. For bipolar depression: 20-120 mg/day. Take with food.",
        sideEffects: [
            "Drowsiness",
            "Akathisia",
            "Nausea",
            "Parkinsonism",
            "Anxiety",
            "Restlessness",
            "Increased prolactin"
        ],
        interactions: [
            {drug: "Strong CYP3A4 inhibitors", level: "high", description: "Significantly increase lurasidone levels" },
            { drug: "Strong CYP3A4 inducers", level: "high", description: "Significantly decrease lurasidone levels" },
            { drug: "QT-prolonging drugs", level: "medium", description: "Increased risk of cardiac arrhythmias" }
        ],
        safety: "Must be taken with food (at least 350 calories) for adequate absorption. Monitor for metabolic changes and extrapyramidal symptoms."
    },

    "Cariprazine": {
        class: "Atypical Antipsychotic",
        brandNames: "Vraylar",
        administration: "Oral",
        halfLife: "2-5 days",
        uses: "Cariprazine is used to treat schizophrenia, manic or mixed episodes associated with bipolar disorder, and depressive episodes associated with bipolar disorder.",
        dosage: "Start 1.5 mg once daily, range 1.5-6 mg/day for schizophrenia, 3-6 mg/day for bipolar mania.",
        sideEffects: [
            "Akathisia",
            "Extrapyramidal symptoms",
            "Indigestion",
            "Nausea",
            "Constipation",
            "Vomiting",
            "Drowsiness",
            "Restlessness"
        ],
        interactions: [
            { drug: "Strong CYP3A4 inhibitors", level: "high", description: "Increase cariprazine levels" },
            { drug: "CNS depressants", level: "medium", description: "Enhanced sedative effects" },
            { drug: "Antihypertensives", level: "medium", description: "May enhance hypotensive effects" }
        ],
        safety: "Long half-life requires several weeks to reach steady state. Monitor for akathisia and extrapyramidal symptoms, which are common."
    },

    "Thioridazine": {
        class: "Typical Antipsychotic",
        brandNames: "Mellaril",
        administration: "Oral",
        halfLife: "24 hours",
        uses: "Thioridazine is used for schizophrenia in patients who have not responded to other antipsychotics.",
        dosage: "Start 50-100 mg three times daily, range 200-800 mg/day. Maximum 800 mg/day.",
        sideEffects: [
            "QT prolongation",
            "Sedation",
            "Dry mouth",
            "Blurred vision",
            "Constipation",
            "Retinal pigmentation",
            "Orthostatic hypotension",
            "Priapism"
        ],
        interactions: [
            { drug: "QT-prolonging drugs", level: "high", description: "Contraindicated due to high arrhythmia risk" },
            { drug: "CYP2D6 inhibitors", level: "high", description: "Increase thioridazine levels" },
            { drug: "Fluoxetine", level: "high", description: "Contraindicated combination" },
            { drug: "Paroxetine", level: "high", description: "Contraindicated combination" }
        ],
        safety: "Black box warning for QT prolongation and sudden death. Requires baseline ECG and regular monitoring. Contraindicated with many medications."
    },

    "Perphenazine": {
        class: "Typical Antipsychotic",
        brandNames: "Trilafon",
        administration: "Oral, Injectable",
        halfLife: "9-12 hours",
        uses: "Perphenazine is used to treat schizophrenia and severe nausea and vomiting.",
        dosage: "For psychosis: 4-16 mg 2-4 times daily, range 8-64 mg/day. For nausea: 8-16 mg daily in divided doses.",
        sideEffects: [
            "Extrapyramidal symptoms",
            "Akathisia",
            "Drowsiness",
            "Dizziness",
            "Dry mouth",
            "Blurred vision",
            "Constipation",
            "Tardive dyskinesia"
        ],
        interactions: [
            { drug: "CNS depressants", level: "high", description: "Enhanced sedative effects" },
            { drug: "Anticholinergic drugs", level: "medium", description: "May reduce antipsychotic efficacy" },
            { drug: "Lithium", level: "medium", description: "Increased risk of neurotoxicity" },
            { drug: "Propranolol", level: "medium", description: "Increases perphenazine levels" }
        ],
        safety: "High risk of extrapyramidal symptoms. Monitor for neuroleptic malignant syndrome and tardive dyskinesia. Use lowest effective dose."
    },

    "Amisulpride": {
        class: "Atypical Antipsychotic",
        brandNames: "Solian, Barhemsys",
        administration: "Oral, Injectable",
        halfLife: "12 hours",
        uses: "Amisulpride is used to treat schizophrenia and prevention of postoperative nausea and vomiting.",
        dosage: "For positive symptoms: 400-800 mg/day. For negative symptoms: 50-300 mg/day. Maximum 1200 mg/day.",
        sideEffects: [
            "Increased prolactin",
            "Insomnia",
            "Anxiety",
            "Agitation",
            "Extrapyramidal symptoms",
            "Weight gain",
            "QT prolongation"
        ],
        interactions: [
            { drug: "QT-prolonging drugs", level: "high", description: "Increased risk of cardiac arrhythmias" },
            { drug: "Levodopa", level: "medium", description: "Antagonizes effects" },
            { drug: "Alcohol", level: "medium", description: "Enhanced sedative effects" }
        ],
        safety: "Significantly increases prolactin levels. Monitor ECG for QT prolongation. Use caution in patients with renal impairment."
    },
    "Zolpidem": {
        class: "Non-benzodiazepine Hypnotic",
        brandNames: "Ambien, Edluar, Intermezzo",
        administration: "Oral",
        halfLife: "2-3 hours",
        uses: "Zolpidem is used for the short-term treatment of insomnia to help with falling asleep.",
        dosage: "Adults: 5-10 mg immediately before bedtime. Maximum dose: 10 mg. Lower doses recommended for elderly or hepatic impairment.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Diarrhea",
            "Daytime drowsiness",
            "Headache",
            "Nausea"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Increased CNS depression and impairment" },
            { drug: "Other CNS depressants", level: "high", description: "Enhanced sedative effects" },
            { drug: "Rifampin", level: "medium", description: "May decrease zolpidem effectiveness" },
            { drug: "Ketoconazole", level: "medium", description: "May increase zolpidem levels" }
        ],
        safety: "May cause complex sleep behaviors including sleep-walking, sleep-driving, and other activities without full awareness. Do not take unless you can get a full night's sleep (7-8 hours)."
    },
    "Zaleplon": {
        class: "Non-benzodiazepine Hypnotic",
        brandNames: "Sonata",
        administration: "Oral",
        halfLife: "1 hour",
        uses: "Zaleplon is used for the short-term treatment of insomnia, particularly for difficulty falling asleep.",
        dosage: "Adults: 5-20 mg at bedtime. Maximum dose: 20 mg. Lower doses recommended for elderly or hepatic impairment.",
        sideEffects: [
            "Dizziness",
            "Lightheadedness",
            "Coordination problems",
            "Memory problems",
            "Headache",
            "Nausea"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Increased CNS depression" },
            { drug: "Cimetidine", level: "medium", description: "May increase zaleplon levels" },
            { drug: "CNS depressants", level: "high", description: "Enhanced sedative effects" },
            { drug: "Enzyme inducers", level: "medium", description: "May decrease effectiveness" }
        ],
        safety: "Take only when you have time for a full night's sleep. May cause memory problems and sleep-related behaviors. Do not take with alcohol."
    },
    "Eszopiclone": {
        class: "Non-benzodiazepine Hypnotic",
        brandNames: "Lunesta",
        administration: "Oral",
        halfLife: "6 hours",
        uses: "Eszopiclone is used for the treatment of insomnia to help with falling asleep and staying asleep.",
        dosage: "Adults: 1-3 mg immediately before bedtime. Starting dose: 1 mg. Maximum dose: 3 mg.",
        sideEffects: [
            "Unpleasant taste in mouth",
            "Headache",
            "Drowsiness",
            "Dizziness",
            "Dry mouth",
            "Nausea"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Severe CNS depression" },
            { drug: "Olanzapine", level: "medium", description: "Increased drowsiness" },
            { drug: "CNS depressants", level: "high", description: "Enhanced sedative effects" },
            { drug: "Strong CYP3A4 inhibitors", level: "medium", description: "May increase eszopiclone levels" }
        ],
        safety: "May cause sleep-related behaviors and next-day impairment. Do not take unless you can get a full night's sleep. May cause dependence with long-term use."
    },
    "Ramelteon": {
        class: "Melatonin Receptor Agonist",
        brandNames: "Rozerem",
        administration: "Oral",
        halfLife: "1-2.6 hours",
        uses: "Ramelteon is used for the treatment of insomnia characterized by difficulty with sleep onset.",
        dosage: "Adults: 8 mg taken within 30 minutes of going to bed. Do not take with or immediately after a high-fat meal.",
        sideEffects: [
            "Dizziness",
            "Fatigue",
            "Nausea",
            "Worsening insomnia",
            "Headache",
            "Somnolence"
        ],
        interactions: [
            { drug: "Fluvoxamine", level: "high", description: "Significantly increases ramelteon levels" },
            { drug: "Alcohol", level: "medium", description: "May enhance CNS effects" },
            { drug: "Strong CYP1A2 inhibitors", level: "high", description: "Increased ramelteon exposure" },
            { drug: "Rifampin", level: "medium", description: "Decreases ramelteon effectiveness" }
        ],
        safety: "Not a controlled substance. Does not cause dependence or withdrawal symptoms. Should not be used in patients with severe hepatic impairment."
    },
    "Melatonin": {
        class: "Hormone Supplement",
        brandNames: "Various OTC brands",
        administration: "Oral",
        halfLife: "30-50 minutes",
        uses: "Melatonin is used to treat insomnia, jet lag, and sleep-wake cycle disturbances. Also used for circadian rhythm disorders.",
        dosage: "For insomnia: 1-5 mg 30-60 minutes before bedtime. For jet lag: 0.5-5 mg at destination bedtime.",
        sideEffects: [
            "Headache",
            "Dizziness",
            "Nausea",
            "Drowsiness",
            "Vivid dreams",
            "Daytime sleepiness"
        ],
        interactions: [
            { drug: "Blood pressure medications", level: "medium", description: "May affect blood pressure control" },
            { drug: "Diabetes medications", level: "medium", description: "May affect blood sugar levels" },
            { drug: "Warfarin", level: "medium", description: "May increase anticoagulant effect" },
            { drug: "CNS depressants", level: "medium", description: "May enhance sedative effects" }
        ],
        safety: "Generally considered safe for short-term use. Long-term effects unknown. May affect hormonal development in children. Consult healthcare provider before use in pregnancy."
    },
    "Doxepin (low-dose)": {
        class: "Tricyclic Antidepressant",
        brandNames: "Silenor",
        administration: "Oral",
        halfLife: "15 hours",
        uses: "Low-dose doxepin is used for the treatment of insomnia characterized by difficulties with sleep maintenance.",
        dosage: "Adults: 3-6 mg once daily within 30 minutes of bedtime. Do not take within 3 hours of a meal.",
        sideEffects: [
            "Sedation",
            "Headache",
            "Nausea",
            "Upper respiratory infection",
            "Drowsiness",
            "Dry mouth"
        ],
        interactions: [
            { drug: "MAO inhibitors", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "CNS depressants", level: "high", description: "Enhanced sedative effects" },
            { drug: "Cimetidine", level: "medium", description: "May increase doxepin levels" },
            { drug: "Alcohol", level: "high", description: "Increased CNS depression" }
        ],
        safety: "Contraindicated in patients with untreated narrow-angle glaucoma or severe urinary retention. May cause next-day impairment. Not recommended in patients with severe sleep apnea."
    },
    "Temazepam": {
        class: "Benzodiazepine",
        brandNames: "Restoril",
        administration: "Oral",
        halfLife: "8-20 hours",
        uses: "Temazepam is used for the short-term treatment of insomnia to help with falling asleep and staying asleep.",
        dosage: "Adults: 7.5-30 mg at bedtime. Starting dose: 7.5-15 mg. Maximum dose: 30 mg.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Lethargy",
            "Headache",
            "Fatigue",
            "Nervousness"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Severe CNS depression" },
            { drug: "Opioids", level: "high", description: "Profound sedation and respiratory depression" },
            { drug: "Other CNS depressants", level: "high", description: "Enhanced sedative effects" },
            { drug: "Oral contraceptives", level: "medium", description: "May increase temazepam levels" }
        ],
        safety: "Risk of dependence and withdrawal symptoms. Not recommended for long-term use. May cause rebound insomnia. Avoid abrupt discontinuation after prolonged use."
    },
    "Trazodone": {
        class: "Serotonin Antagonist and Reuptake Inhibitor (SARI)",
        brandNames: "Desyrel, Oleptro",
        administration: "Oral",
        halfLife: "5-9 hours",
        uses: "Trazodone is used for the treatment of depression and off-label for insomnia, particularly for sleep maintenance.",
        dosage: "For insomnia: 25-100 mg at bedtime. For depression: 150-400 mg daily in divided doses.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Dry mouth",
            "Blurred vision",
            "Headache",
            "Nausea"
        ],
        interactions: [
            { drug: "MAO inhibitors", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "Other serotonergic drugs", level: "high", description: "Increased serotonin effects" },
            { drug: "CNS depressants", level: "medium", description: "Enhanced sedative effects" },
            { drug: "Digoxin", level: "medium", description: "May increase digoxin levels" }
        ],
        safety: "Risk of priapism (prolonged, painful erection). May cause orthostatic hypotension. Monitor for serotonin syndrome when used with other serotonergic agents."
    },
    "Suvorexant": {
        class: "Orexin Receptor Antagonist",
        brandNames: "Belsomra",
        administration: "Oral",
        halfLife: "12 hours",
        uses: "Suvorexant is used for the treatment of insomnia characterized by difficulties with sleep onset and/or sleep maintenance.",
        dosage: "Adults: 10-20 mg once nightly within 30 minutes of bedtime. Maximum dose: 20 mg.",
        sideEffects: [
            "Somnolence",
            "Headache",
            "Dizziness",
            "Abnormal dreams",
            "Dry mouth",
            "Next-day drowsiness"
        ],
        interactions: [
            { drug: "Strong CYP3A inhibitors", level: "high", description: "Increased suvorexant exposure" },
            { drug: "Alcohol", level: "high", description: "Increased CNS depression" },
            { drug: "Other CNS depressants", level: "high", description: "Enhanced sedative effects" },
            { drug: "Strong CYP3A inducers", level: "medium", description: "Decreased suvorexant effectiveness" }
        ],
        safety: "May cause sleep paralysis, hypnagogic/hypnopompic hallucinations, and cataplexy-like symptoms. Risk of next-day impairment. Not recommended with severe hepatic impairment."
    },
    "Diphenhydramine": {
        class: "First-generation Antihistamine",
        brandNames: "Benadryl, Sominex, Nytol",
        administration: "Oral",
        halfLife: "2-8 hours",
        uses: "Diphenhydramine is used for the relief of allergy symptoms and as a sleep aid for occasional sleeplessness.",
        dosage: "For insomnia: 25-50 mg 30 minutes before bedtime. Maximum dose: 50 mg. Not recommended for long-term use.",
        sideEffects: [
            "Drowsiness",
            "Dry mouth",
            "Dizziness",
            "Urinary retention",
            "Blurred vision",
            "Constipation"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Increased CNS depression" },
            { drug: "MAO inhibitors", level: "high", description: "Enhanced anticholinergic effects" },
            { drug: "Other CNS depressants", level: "high", description: "Enhanced sedative effects" },
            { drug: "Anticholinergic drugs", level: "medium", description: "Increased anticholinergic side effects" }
        ],
        safety: "Not recommended for long-term use due to tolerance development. May cause paradoxical excitation in children and elderly. Use with caution in patients with glaucoma, urinary retention, or asthma."
    },
    "Hydroxyzine": {
        class: "First-generation Antihistamine",
        brandNames: "Vistaril, Atarax",
        administration: "Oral",
        halfLife: "20-25 hours",
        uses: "Hydroxyzine is used for anxiety, tension, pruritus, and as a sedative for preoperative and preprocedural sedation.",
        dosage: "For sedation: 50-100 mg at bedtime. For anxiety: 50-100 mg 4 times daily. Maximum daily dose: 400 mg.",
        sideEffects: [
            "Drowsiness",
            "Dry mouth",
            "Headache",
            "Dizziness",
            "Blurred vision",
            "Constipation"
        ],
        interactions: [
            { drug: "CNS depressants", level: "high", description: "Enhanced sedative effects" },
            { drug: "Alcohol", level: "high", description: "Increased CNS depression" },
            { drug: "Enzyme inhibitors", level: "medium", description: "May increase hydroxyzine levels" },
            { drug: "Anticholinergic drugs", level: "medium", description: "Enhanced anticholinergic effects" }
        ],
        safety: "May impair mental and physical abilities. Not recommended during early pregnancy. Use with caution in elderly patients due to increased sensitivity to anticholinergic effects."
    },
    "Albuterol": {
        class: "Short-Acting Beta Agonist (SABA)",
        brandNames: "ProAir, Ventolin, Proventil",
        administration: "Inhalation, Oral, Nebulization",
        halfLife: "3-6 hours",
        uses: "Albuterol is used to treat or prevent bronchospasm in people with reversible obstructive airway disease. It is also used to prevent exercise-induced bronchospasm.",
        dosage: "For bronchospasm: 1-2 inhalations every 4-6 hours as needed. Maximum 8 inhalations per day. For prevention of exercise-induced bronchospasm: 2 inhalations 15-30 minutes before exercise.",
        sideEffects: [
            "Nervousness or shakiness",
            "Headache",
            "Throat irritation",
            "Rapid heart rate",
            "Muscle cramps",
            "Cough"
        ],
        interactions: [
            { drug: "Beta-blockers", level: "high", description: "May block bronchodilating effect" },
            { drug: "Diuretics", level: "medium", description: "May increase risk of hypokalemia" },
            { drug: "Digoxin", level: "medium", description: "May decrease digoxin levels" },
            { drug: "MAO inhibitors", level: "high", description: "May increase cardiovascular effects" }
        ],
        safety: "Overuse may lead to paradoxical bronchospasm. Use with caution in patients with cardiovascular disorders, diabetes, or hyperthyroidism. Not for primary treatment of status asthmaticus."
    },

    "Salbutamol": {
        class: "Short-Acting Beta Agonist (SABA)",
        brandNames: "Ventolin, Airomir, Asmasal",
        administration: "Inhalation, Oral, Nebulization",
        halfLife: "4-6 hours",
        uses: "Salbutamol is used for relief of bronchospasm in conditions such as asthma and chronic obstructive pulmonary disease (COPD).",
        dosage: "Adults: 100-200 mcg (1-2 puffs) as needed up to 4 times daily. Children: 100 mcg as needed up to 4 times daily.",
        sideEffects: [
            "Fine tremor of hands",
            "Headache",
            "Tachycardia",
            "Muscle cramps",
            "Hypokalemia",
            "Nervousness"
        ],
        interactions: [
            { drug: "Beta-blockers", level: "high", description: "Antagonistic effect - avoid concurrent use" },
            { drug: "Diuretics", level: "medium", description: "Enhanced hypokalemic effect" },
            { drug: "Digoxin", level: "medium", description: "Risk of hypokalemia may increase digoxin toxicity" }
        ],
        safety: "Paradoxical bronchospasm may occur. Use with caution in patients with cardiovascular disease, diabetes, or hyperthyroidism. Do not exceed recommended dosage."
    },

    "Levalbuterol": {
        class: "Short-Acting Beta Agonist (SABA)",
        brandNames: "Xopenex",
        administration: "Inhalation, Nebulization",
        halfLife: "3-4 hours",
        uses: "Levalbuterol is used for the treatment or prevention of bronchospasm in adults and children with reversible obstructive airway disease.",
        dosage: "Nebulization: 0.63 mg three times daily, every 6-8 hours. Maximum 1.25 mg three times daily. Inhalation: 1-2 inhalations every 4-6 hours.",
        sideEffects: [
            "Nervousness",
            "Tremor",
            "Headache",
            "Tachycardia",
            "Dizziness",
            "Pharyngitis"
        ],
        interactions: [
            { drug: "Beta-blockers", level: "high", description: "Mutual antagonism - avoid concurrent use" },
            { drug: "Diuretics", level: "medium", description: "May worsen hypokalemia" },
            { drug: "Digoxin", level: "medium", description: "May decrease serum digoxin levels" }
        ],
        safety: "Contains the (R)-isomer of albuterol. May cause paradoxical bronchospasm. Use with caution in patients with cardiovascular disorders."
    },

    "Formoterol": {
        class: "Long-Acting Beta Agonist (LABA)",
        brandNames: "Foradil, Oxeze, Perforomist",
        administration: "Inhalation",
        halfLife: "10 hours",
        uses: "Formoterol is used for long-term maintenance treatment of asthma and prevention of bronchospasm in patients with reversible obstructive airways disease. Also used for COPD maintenance.",
        dosage: "Asthma: 12 mcg every 12 hours. COPD: 12 mcg every 12 hours. Maximum 24 mcg twice daily. Should be used with an inhaled corticosteroid.",
        sideEffects: [
            "Tremor",
            "Palpitations",
            "Headache",
            "Muscle cramps",
            "Tachycardia",
            "Cough"
        ],
        interactions: [
            { drug: "Beta-blockers", level: "high", description: "May block bronchodilating effect" },
            { drug: "Diuretics", level: "medium", description: "May increase risk of hypokalemia" },
            { drug: "MAO inhibitors", level: "high", description: "May potentiate cardiovascular effects" },
            { drug: "Tricyclic antidepressants", level: "medium", description: "May potentiate cardiovascular effects" }
        ],
        safety: "Not for relief of acute bronchospasm. Increased risk of asthma-related death. Must be used with an inhaled corticosteroid for asthma treatment. Do not use as monotherapy."
    },

    "Salmeterol": {
        class: "Long-Acting Beta Agonist (LABA)",
        brandNames: "Serevent",
        administration: "Inhalation",
        halfLife: "5.5 hours",
        uses: "Salmeterol is used for long-term maintenance treatment of asthma and prevention of bronchospasm. Also used for prevention of exercise-induced bronchospasm and maintenance treatment of COPD.",
        dosage: "Asthma/COPD: 1 inhalation (50 mcg) twice daily, approximately 12 hours apart. Exercise-induced bronchospasm: 1 inhalation at least 30 minutes before exercise.",
        sideEffects: [
            "Upper respiratory infection",
            "Headache",
            "Throat irritation",
            "Tremor",
            "Palpitations",
            "Cough"
        ],
        interactions: [
            { drug: "Beta-blockers", level: "high", description: "Mutual antagonism - avoid concurrent use" },
            { drug: "Diuretics", level: "medium", description: "May enhance hypokalemic effect" },
            { drug: "MAO inhibitors", level: "high", description: "May increase cardiovascular effects" }
        ],
        safety: "Black box warning: Increased risk of asthma-related death. Not for acute bronchospasm. Must be used with inhaled corticosteroids for asthma. Do not exceed recommended dosage."
    },

    "Budesonide": {
        class: "Inhaled Corticosteroid",
        brandNames: "Pulmicort, Rhinocort, Entocort",
        administration: "Inhalation, Nasal, Oral",
        halfLife: "2-3 hours",
        uses: "Budesonide is used for maintenance treatment of asthma as prophylactic therapy. Also used for allergic rhinitis and Crohn's disease.",
        dosage: "Asthma: 180-360 mcg twice daily. Maximum 720 mcg twice daily. Nasal: 64 mcg per nostril once daily. Crohn's: 9 mg once daily for 8 weeks.",
        sideEffects: [
            "Oral candidiasis",
            "Hoarseness",
            "Throat irritation",
            "Headache",
            "Cough",
            "Upper respiratory infection"
        ],
        interactions: [
            { drug: "Ketoconazole", level: "high", description: "May increase budesonide concentrations" },
            { drug: "CYP3A4 inhibitors", level: "medium", description: "May increase systemic exposure" },
            { drug: "Oral corticosteroids", level: "medium", description: "Additive systemic effects" }
        ],
        safety: "Rinse mouth after inhalation to prevent oral candidiasis. Not for relief of acute bronchospasm. Monitor for HPA axis suppression with long-term use. Caution in patients switching from systemic steroids."
    },

    "Fluticasone": {
        class: "Inhaled Corticosteroid",
        brandNames: "Flovent, Flonase, Advair (combination)",
        administration: "Inhalation, Nasal",
        halfLife: "7-8 hours",
        uses: "Fluticasone is used for maintenance treatment of asthma as prophylactic therapy. Also used for allergic and non-allergic rhinitis.",
        dosage: "Asthma: 88-440 mcg twice daily. Maximum 880 mcg twice daily. Allergic rhinitis: 1-2 sprays per nostril once daily.",
        sideEffects: [
            "Headache",
            "Nasal irritation",
            "Pharyngitis",
            "Oral candidiasis",
            "Cough",
            "Upper respiratory infection"
        ],
        interactions: [
            { drug: "Ritonavir", level: "high", description: "Significantly increases fluticasone levels" },
            { drug: "Ketoconazole", level: "high", description: "May increase fluticasone concentrations" },
            { drug: "CYP3A4 inhibitors", level: "medium", description: "May increase systemic exposure" }
        ],
        safety: "Rinse mouth after use to prevent oral candidiasis. Not for acute bronchospasm. Monitor growth in pediatric patients. Caution when transferring from systemic corticosteroids."
    },

    "Beclomethasone": {
        class: "Inhaled Corticosteroid",
        brandNames: "QVAR, Beconase",
        administration: "Inhalation, Nasal",
        halfLife: "2.8 hours",
        uses: "Beclomethasone is used for maintenance treatment of asthma and for management of seasonal or perennial allergic rhinitis.",
        dosage: "Asthma: 40-80 mcg twice daily. Maximum 320 mcg twice daily. Allergic rhinitis: 1-2 sprays per nostril twice daily.",
        sideEffects: [
            "Headache",
            "Nasal congestion",
            "Sneezing",
            "Oral candidiasis",
            "Hoarseness",
            "Cough"
        ],
        interactions: [
            { drug: "Ketoconazole", level: "medium", description: "May increase beclomethasone levels" },
            { drug: "CYP3A4 inhibitors", level: "medium", description: "Potential for increased systemic exposure" }
        ],
        safety: "Rinse mouth after inhalation to prevent oral candidiasis. Not for relief of acute bronchospasm. Monitor for adrenal insufficiency when switching from oral steroids."
    },

    "Montelukast": {
        class: "Leukotriene Receptor Antagonist",
        brandNames: "Singulair",
        administration: "Oral",
        halfLife: "2.7-5.5 hours",
        uses: "Montelukast is used for prophylaxis and chronic treatment of asthma, relief of seasonal allergic rhinitis symptoms, and prevention of exercise-induced bronchoconstriction.",
        dosage: "Adults: 10 mg once daily in evening. Children 6-14 years: 5 mg chewable tablet daily. Children 2-5 years: 4 mg chewable tablet daily.",
        sideEffects: [
            "Headache",
            "Abdominal pain",
            "Cough",
            "Influenza",
            "Fever",
            "Dizziness"
        ],
        interactions: [
            { drug: "Phenobarbital", level: "medium", description: "May decrease montelukast concentrations" },
            { drug: "Rifampin", level: "medium", description: "May decrease montelukast concentrations" }
        ],
        safety: "Black box warning: Serious neuropsychiatric events including agitation, aggression, depression, and suicidal thinking. Monitor for behavior and mood changes. Not for acute asthma attacks."
    },

    "Theophylline": {
        class: "Methylxanthine",
        brandNames: "Theo-24, Uniphyl, Elixophyllin",
        administration: "Oral, IV",
        halfLife: "3-15 hours (dose-dependent)",
        uses: "Theophylline is used for treatment and prevention of asthma symptoms and bronchospasm associated with chronic bronchitis and emphysema.",
        dosage: "Adults: 300-600 mg daily in divided doses. Must be individualized based on serum concentrations. Therapeutic range: 5-15 mcg/mL.",
        sideEffects: [
            "Nausea",
            "Vomiting",
            "Headache",
            "Insomnia",
            "Tachycardia",
            "Seizures (at toxic levels)"
        ],
        interactions: [
            { drug: "Cimetidine", level: "high", description: "May increase theophylline levels" },
            { drug: "Ciprofloxacin", level: "high", description: "May increase theophylline levels" },
            { drug: "Phenytoin", level: "high", description: "May decrease theophylline levels" },
            { drug: "Smoking", level: "medium", description: "May decrease theophylline levels" }
        ],
        safety: "Narrow therapeutic index - requires serum concentration monitoring. Risk of seizures at high concentrations. Many drug interactions. Use with caution in patients with cardiac disease."
    },

    "Ipratropium": {
        class: "Anticholinergic",
        brandNames: "Atrovent",
        administration: "Inhalation, Nebulization",
        halfLife: "2 hours",
        uses: "Ipratropium is used for bronchospasm associated with COPD, including chronic bronchitis and emphysema. Also used for rhinorrhea associated with allergic and non-allergic rhinitis.",
        dosage: "COPD: 2 inhalations (34 mcg) four times daily. Maximum 12 inhalations in 24 hours. Nasal: 2 sprays per nostril 2-3 times daily.",
        sideEffects: [
            "Dry mouth",
            "Cough",
            "Headache",
            "Upper respiratory infection",
            "Nasal dryness",
            "Blurred vision (if sprayed in eyes)"
        ],
        interactions: [
            { drug: "Other anticholinergics", level: "medium", description: "Additive anticholinergic effects" }
        ],
        safety: "Not for initial treatment of acute episodes of bronchospasm. Avoid contact with eyes. Use with caution in patients with narrow-angle glaucoma, prostatic hyperplasia, or bladder neck obstruction."
    },

    "Tiotropium": {
        class: "Long-Acting Anticholinergic",
        brandNames: "Spiriva",
        administration: "Inhalation",
        halfLife: "5-6 days",
        uses: "Tiotropium is used for long-term maintenance treatment of bronchospasm associated with COPD, including chronic bronchitis and emphysema.",
        dosage: "COPD: 1 inhalation (18 mcg) once daily using HandiHaler device. Should be taken at the same time each day.",
        sideEffects: [
            "Dry mouth",
            "Upper respiratory infection",
            "Sinusitis",
            "Pharyngitis",
            "Constipation",
            "Urinary retention"
        ],
        interactions: [
            { drug: "Other anticholinergics", level: "high", description: "Additive anticholinergic adverse effects" }
        ],
        safety: "Not for relief of acute bronchospasm. Immediate hypersensitivity reactions may occur. Use with caution in patients with narrow-angle glaucoma, prostatic hyperplasia, or bladder neck obstruction."
    },

    "Cromolyn sodium": {
        class: "Mast Cell Stabilizer",
        brandNames: "Intal, Nasalcrom, Gastrocrom",
        administration: "Inhalation, Nasal, Oral",
        halfLife: "1.3 hours",
        uses: "Cromolyn sodium is used for prophylaxis of asthma symptoms and prevention of exercise-induced bronchospasm. Also used for allergic rhinitis and mastocytosis.",
        dosage: "Asthma: 1 ampule via nebulizer 4 times daily. Nasal: 1 spray per nostril 3-6 times daily. Must be used regularly for effectiveness.",
        sideEffects: [
            "Throat irritation",
            "Cough",
            "Bad taste",
            "Headache",
            "Nausea",
            "Sneezing"
        ],
        interactions: [
            { drug: "None significant", level: "low", description: "No clinically significant drug interactions reported" }
        ],
        safety: "Not for acute asthma attacks. Therapeutic effect may take 2-4 weeks. Must be used regularly for prophylaxis. Discontinue if eosinophilic pneumonia occurs."
    },

    "Zafirlukast": {
        class: "Leukotriene Receptor Antagonist",
        brandNames: "Accolate",
        administration: "Oral",
        halfLife: "10 hours",
        uses: "Zafirlukast is used for prophylaxis and chronic treatment of asthma in adults and children 5 years and older.",
        dosage: "Adults: 20 mg twice daily. Children 5-11 years: 10 mg twice daily. Take at least 1 hour before or 2 hours after meals.",
        sideEffects: [
            "Headache",
            "Nausea",
            "Diarrhea",
            "Infection",
            "Abdominal pain",
            "Dizziness"
        ],
        interactions: [
            { drug: "Warfarin", level: "high", description: "May increase prothrombin time" },
            { drug: "Erythromycin", level: "medium", description: "May decrease zafirlukast levels" },
            { drug: "Theophylline", level: "medium", description: "May decrease zafirlukast levels" }
        ],
        safety: "Risk of hepatic toxicity - monitor liver enzymes. Not for acute asthma attacks. Take on empty stomach. Discontinue if hepatic dysfunction occurs."
    },

    "Mepolizumab": {
        class: "Interleukin-5 Antagonist Monoclonal Antibody",
        brandNames: "Nucala",
        administration: "Subcutaneous injection",
        halfLife: "16-22 days",
        uses: "Mepolizumab is used as add-on maintenance treatment for severe eosinophilic asthma in patients 6 years and older.",
        dosage: "100 mg administered subcutaneously every 4 weeks. Should be administered by healthcare professional or properly trained patient.",
        sideEffects: [
            "Headache",
            "Injection site reactions",
            "Fatigue",
            "Back pain",
            "Urinary tract infection",
            "Hypersensitivity reactions"
        ],
        interactions: [
            { drug: "Live vaccines", level: "high", description: "Avoid concurrent administration" },
            { drug: "Corticosteroids", level: "medium", description: "Taper corticosteroids gradually" }
        ],
        safety: "Not for treatment of acute bronchospasm or status asthmaticus. Monitor for hypersensitivity reactions. Do not discontinue systemic or inhaled corticosteroids abruptly."
    },

    "Omalizumab": {
        class: "Anti-IgE Monoclonal Antibody",
        brandNames: "Xolair",
        administration: "Subcutaneous injection",
        halfLife: "26 days",
        uses: "Omalizumab is used for moderate to severe persistent asthma in patients 6 years and older who have a positive skin test or in vitro reactivity to a perennial aeroallergen.",
        dosage: "150-375 mg subcutaneously every 2 or 4 weeks, based on IgE level and body weight. Must be administered in healthcare setting.",
        sideEffects: [
            "Injection site reactions",
            "Viral infections",
            "Upper respiratory infection",
            "Headache",
            "Anaphylaxis",
            "Malignancy"
        ],
        interactions: [
            { drug: "Live vaccines", level: "high", description: "Avoid concurrent administration" }
        ],
        safety: "Black box warning: Anaphylaxis may occur - observe patients for 2 hours after first 3 injections and 30 minutes thereafter. Not for treatment of acute bronchospasm."
    },
    "Cetirizine": {
        class: "Second-generation Antihistamine",
        brandNames: "Zyrtec, Aller-Tec, Alleroff",
        administration: "Oral",
        halfLife: "8.3 hours",
        uses: "Cetirizine is used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching.",
        dosage: "Adults and children 6 years and older: 5-10 mg once daily. Children 2-5 years: 2.5 mg once daily, may increase to 5 mg once daily or 2.5 mg every 12 hours.",
        sideEffects: [
            "Drowsiness",
            "Fatigue",
            "Dry mouth",
            "Headache",
            "Sore throat",
            "Dizziness"
        ],
        interactions: [
            { drug: "CNS depressants", level: "medium", description: "May increase sedative effects" },
            { drug: "Theophylline", level: "low", description: "May slightly decrease cetirizine clearance" },
            { drug: "Alcohol", level: "medium", description: "May increase drowsiness" }
        ],
        safety: "Use with caution in patients with renal impairment. May cause drowsiness; avoid driving or operating machinery until response is known."
    },
    "Loratadine": {
        class: "Second-generation Antihistamine",
        brandNames: "Claritin, Alavert, Tavist ND",
        administration: "Oral",
        halfLife: "8.4 hours",
        uses: "Loratadine is used to relieve symptoms of seasonal allergies, including sneezing, runny nose, itchy/watery eyes, and itching of the nose or throat.",
        dosage: "Adults and children 6 years and older: 10 mg once daily. Children 2-5 years: 5 mg once daily.",
        sideEffects: [
            "Headache",
            "Drowsiness",
            "Fatigue",
            "Dry mouth",
            "Nervousness",
            "Stomach pain"
        ],
        interactions: [
            { drug: "Ketoconazole", level: "medium", description: "May increase loratadine levels" },
            { drug: "Erythromycin", level: "medium", description: "May increase loratadine levels" },
            { drug: "Cimetidine", level: "low", description: "May increase loratadine levels" }
        ],
        safety: "Dose adjustment recommended in patients with liver impairment. Generally causes less drowsiness than first-generation antihistamines."
    },
    "Fexofenadine": {
        class: "Second-generation Antihistamine",
        brandNames: "Allegra, Telfast, Fexidine",
        administration: "Oral",
        halfLife: "14.4 hours",
        uses: "Fexofenadine is used to relieve allergy symptoms including sneezing, runny nose, itchy/watery eyes, and hives.",
        dosage: "Adults and children 12+ years: 60 mg twice daily or 180 mg once daily. Children 6-11 years: 30 mg twice daily.",
        sideEffects: [
            "Headache",
            "Back pain",
            "Cough",
            "Diarrhea",
            "Dizziness",
            "Dysmenorrhea"
        ],
        interactions: [
            { drug: "Fruit juices", level: "high", description: "Apple, orange, and grapefruit juice may decrease absorption" },
            { drug: "Antacids", level: "medium", description: "Aluminum and magnesium-containing antacids may decrease absorption" },
            { drug: "Erythromycin", level: "medium", description: "May increase fexofenadine levels" },
            { drug: "Ketoconazole", level: "medium", description: "May increase fexofenadine levels" }
        ],
        safety: "Take on an empty stomach. Avoid taking with fruit juices. Generally non-sedating."
    },
    "Diphenhydramine": {
        class: "First-generation Antihistamine",
        brandNames: "Benadryl, Sominex, Nytol",
        administration: "Oral, Topical, Injection",
        halfLife: "2-8 hours",
        uses: "Diphenhydramine is used to relieve allergy symptoms, treat motion sickness, induce sleep, and relieve cough. Also used for allergic reactions and as a sleep aid.",
        dosage: "Adults: 25-50 mg every 4-6 hours. Maximum 300 mg/day. For sleep: 50 mg at bedtime.",
        sideEffects: [
            "Drowsiness",
            "Dry mouth",
            "Dizziness",
            "Blurred vision",
            "Constipation",
            "Urinary retention"
        ],
        interactions: [
            { drug: "CNS depressants", level: "high", description: "Significant increase in sedative effects" },
            { drug: "MAO inhibitors", level: "high", description: "May prolong and intensify anticholinergic effects" },
            { drug: "Alcohol", level: "high", description: "Marked increase in CNS depression" }
        ],
        safety: "Causes significant drowsiness. Avoid driving or operating machinery. Use with caution in elderly patients due to increased risk of confusion and falls."
    },
    "Chlorpheniramine": {
        class: "First-generation Antihistamine",
        brandNames: "Chlor-Trimeton, Aller-Chlor, PediaCare Allergy",
        administration: "Oral, Injection",
        halfLife: "20-24 hours",
        uses: "Chlorpheniramine is used to relieve symptoms of allergies, hay fever, and the common cold, such as sneezing, itching, watery eyes, and runny nose.",
        dosage: "Adults: 4 mg every 4-6 hours, not to exceed 24 mg in 24 hours. Extended-release: 8-12 mg every 8-12 hours.",
        sideEffects: [
            "Drowsiness",
            "Dry mouth",
            "Dizziness",
            "Headache",
            "Loss of appetite",
            "Upset stomach"
        ],
        interactions: [
            { drug: "MAO inhibitors", level: "high", description: "May intensify anticholinergic effects" },
            { drug: "Alcohol", level: "high", description: "Increases CNS depression" },
            { drug: "Other CNS depressants", level: "high", description: "Enhanced sedative effects" }
        ],
        safety: "May cause significant drowsiness. Use with caution in patients with glaucoma, prostate enlargement, or respiratory conditions. Elderly patients may be more sensitive to side effects."
    },
    "Hydroxyzine": {
        class: "First-generation Antihistamine",
        brandNames: "Vistaril, Atarax",
        administration: "Oral, Injection",
        halfLife: "20-25 hours",
        uses: "Hydroxyzine is used to relieve itching caused by allergies, for anxiety, and as a sedative before and after general anesthesia.",
        dosage: "For itching: 25 mg three or four times daily. For anxiety: 50-100 mg four times daily. For sedation: 50-100 mg preoperatively.",
        sideEffects: [
            "Drowsiness",
            "Dry mouth",
            "Headache",
            "Dizziness",
            "Blurred vision"
        ],
        interactions: [
            { drug: "CNS depressants", level: "high", description: "Marked increase in CNS depression" },
            { drug: "MAO inhibitors", level: "high", description: "May enhance anticholinergic effects" },
            { drug: "Alcohol", level: "high", description: "Significant increase in sedation" }
        ],
        safety: "May impair mental and physical abilities. Avoid alcohol. Use with caution in patients with cardiovascular disease or glaucoma. Not recommended during pregnancy."
    },
    "Levocetirizine": {
        class: "Second-generation Antihistamine",
        brandNames: "Xyzal",
        administration: "Oral",
        halfLife: "8 hours",
        uses: "Levocetirizine is used to relieve allergy symptoms including sneezing, runny nose, itchy/watery eyes, and hives.",
        dosage: "Adults and children 12+ years: 5 mg once daily in evening. Children 6-11 years: 2.5 mg once daily in evening.",
        sideEffects: [
            "Somnolence",
            "Nasopharyngitis",
            "Fatigue",
            "Dry mouth",
            "Pharyngitis"
        ],
        interactions: [
            { drug: "CNS depressants", level: "low", description: "Minimal interaction reported" },
            { drug: "Theophylline", level: "low", description: "Slight decrease in clearance" },
            { drug: "Ritonavir", level: "medium", description: "May increase levocetirizine exposure" }
        ],
        safety: "Dose adjustment required in renal impairment. May cause drowsiness in some patients. Generally well-tolerated with minimal sedative effects."
    },
    "Desloratadine": {
        class: "Second-generation Antihistamine",
        brandNames: "Clarinex, Aerius",
        administration: "Oral",
        halfLife: "27 hours",
        uses: "Desloratadine is used to relieve allergy symptoms including sneezing, runny nose, itchy/watery eyes, itching of the nose or throat, and hives.",
        dosage: "Adults and children 12+ years: 5 mg once daily. Children 6-11 years: 2.5 mg once daily. Children 12 months-5 years: 1.25 mg once daily.",
        sideEffects: [
            "Headache",
            "Dry mouth",
            "Fatigue",
            "Sore throat",
            "Dizziness",
            "Nausea"
        ],
        interactions: [
            { drug: "Erythromycin", level: "low", description: "Slight increase in desloratadine levels" },
            { drug: "Ketoconazole", level: "low", description: "Slight increase in desloratadine levels" },
            { drug: "Fluoxetine", level: "low", description: "No significant interaction" }
        ],
        safety: "Generally non-sedating. Dose adjustment may be needed in patients with liver or renal impairment. Safe for most patients including those with asthma."
    },
    "Azelastine": {
        class: "Second-generation Antihistamine",
        brandNames: "Astelin, Astepro, Optivar",
        administration: "Nasal spray, Eye drops",
        halfLife: "22 hours",
        uses: "Azelastine nasal spray is used to treat seasonal allergy symptoms. Eye drops are used to treat itchy eyes due to allergies.",
        dosage: "Nasal spray: 1-2 sprays per nostril twice daily. Eye drops: 1 drop in each affected eye twice daily.",
        sideEffects: [
            "Bitter taste",
            "Headache",
            "Nasal burning",
            "Sneezing",
            "Drowsiness",
            "Dry mouth"
        ],
        interactions: [
            { drug: "CNS depressants", level: "low", description: "Minimal systemic interaction due to local administration" },
            { drug: "Alcohol", level: "low", description: "Minimal interaction reported" }
        ],
        safety: "May cause drowsiness in some patients. Avoid spraying in eyes. Temporary burning or stinging may occur after administration."
    },
    "Olopatadine": {
        class: "Second-generation Antihistamine/Mast Cell Stabilizer",
        brandNames: "Patanol, Pataday, Pazeo",
        administration: "Eye drops",
        halfLife: "3 hours",
        uses: "Olopatadine is used to treat itching and redness of the eyes caused by allergies.",
        dosage: "1 drop in each affected eye twice daily (6-8 hours apart). Some formulations are once daily.",
        sideEffects: [
            "Headache",
            "Burning/stinging in eyes",
            "Dry eyes",
            "Foreign body sensation",
            "Blurred vision"
        ],
        interactions: [
            { drug: "Other eye medications", level: "low", description: "Wait at least 5 minutes between different eye drops" },
            { drug: "Contact lenses", level: "low", description: "Remove contacts before administration, wait 10 minutes before reinserting" }
        ],
        safety: "Do not use while wearing contact lenses. May cause temporary blurred vision. Do not touch dropper tip to any surface to avoid contamination."
    },
    "Montelukast": {
        class: "Leukotriene Receptor Antagonist",
        brandNames: "Singulair",
        administration: "Oral",
        halfLife: "2.7-5.5 hours",
        uses: "Montelukast is used to prevent asthma attacks, treat seasonal allergies, and prevent exercise-induced bronchoconstriction.",
        dosage: "Adults 15+ years: 10 mg once daily in evening. Children 6-14 years: 5 mg chewable tablet. Children 2-5 years: 4 mg chewable tablet.",
        sideEffects: [
            "Headache",
            "Upper respiratory infection",
            "Fever",
            "Sore throat",
            "Cough",
            "Stomach pain"
        ],
        interactions: [
            { drug: "Phenobarbital", level: "medium", description: "May decrease montelukast levels" },
            { drug: "Rifampin", level: "medium", description: "May decrease montelukast levels" },
            { drug: "Gemfibrozil", level: "low", description: "Slight increase in montelukast levels" }
        ],
        safety: "FDA boxed warning for serious neuropsychiatric events including suicidal thoughts and behavior. Monitor for changes in mood or behavior. Not for treatment of acute asthma attacks."
    },
    "Ketotifen": {
        class: "Antihistamine/Mast Cell Stabilizer",
        brandNames: "Zaditor, Alaway, Zyrtec Itchy Eye",
        administration: "Eye drops",
        halfLife: "12 hours",
        uses: "Ketotifen is used to prevent itching of the eyes caused by allergies.",
        dosage: "1 drop in each affected eye every 8-12 hours.",
        sideEffects: [
            "Headache",
            "Rhinitis",
            "Burning/stinging in eyes",
            "Dry eyes",
            "Conjunctivitis"
        ],
        interactions: [
            { drug: "Contact lenses", level: "low", description: "Remove contacts before use, wait at least 10 minutes before reinserting" },
            { drug: "Other eye medications", level: "low", description: "Wait at least 5 minutes between different eye drops" }
        ],
        safety: "Do not use while wearing contact lenses. May cause temporary blurred vision. Do not touch dropper tip to eye or any surface."
    },
    "Dimenhydrinate": {
        class: "First-generation Antihistamine",
        brandNames: "Dramamine, Gravol, Trav-L-Tabs",
        administration: "Oral, Injection",
        halfLife: "5-8 hours",
        uses: "Dimenhydrinate is used to prevent and treat nausea, vomiting, and dizziness caused by motion sickness.",
        dosage: "Adults: 50-100 mg every 4-6 hours as needed. Maximum 400 mg in 24 hours. For prevention, take 30-60 minutes before travel.",
        sideEffects: [
            "Drowsiness",
            "Dry mouth",
            "Blurred vision",
            "Constipation",
            "Urinary retention",
            "Headache"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Marked increase in CNS depression" },
            { drug: "Other CNS depressants", level: "high", description: "Enhanced sedative effects" },
            { drug: "MAO inhibitors", level: "high", description: "May intensify anticholinergic effects" }
        ],
        safety: "Causes significant drowsiness. Avoid driving or operating machinery. Use with caution in elderly patients and those with glaucoma, prostate enlargement, or respiratory conditions."
    },
    "Clemastine": {
        class: "First-generation Antihistamine",
        brandNames: "Tavist, Dayhist",
        administration: "Oral",
        halfLife: "21 hours",
        uses: "Clemastine is used to relieve allergy symptoms such as sneezing, runny nose, itching, and watery eyes. Also used for allergic skin reactions.",
        dosage: "Adults: 1.34 mg twice daily, maximum 8.04 mg daily. For allergic skin reactions: 2.68 mg up to three times daily.",
        sideEffects: [
            "Drowsiness",
            "Dry mouth",
            "Headache",
            "Fatigue",
            "Dizziness",
            "Upset stomach"
        ],
        interactions: [
            { drug: "MAO inhibitors", level: "high", description: "May intensify and prolong anticholinergic effects" },
            { drug: "Alcohol", level: "high", description: "Increases CNS depression" },
            { drug: "Other CNS depressants", level: "high", description: "Enhanced sedative effects" }
        ],
        safety: "May cause significant drowsiness. Avoid alcohol. Use with caution in elderly patients and those with glaucoma, prostate enlargement, or respiratory conditions. May impair mental alertness."
    },
    "Paracetamol": {
        class: "Analgesic/Antipyretic",
        brandNames: "Tylenol, Panadol, Calpol",
        administration: "Oral, Rectal, IV",
        halfLife: "1-4 hours",
        uses: "Paracetamol is used to treat mild to moderate pain and fever. It is commonly used for headaches, muscle aches, arthritis, backaches, toothaches, colds, and fevers.",
        dosage: "Adults: 325-650 mg every 4-6 hours or 1000 mg every 6-8 hours. Maximum 4000 mg per day. Children: 10-15 mg/kg every 4-6 hours, not to exceed 5 doses in 24 hours.",
        sideEffects: [
            "Nausea",
            "Stomach pain",
            "Loss of appetite",
            "Headache",
            "Dark urine",
            "Jaundice (yellowing of skin or eyes)"
        ],
        interactions: [
            { drug: "Warfarin", level: "high", description: "May increase risk of bleeding" },
            { drug: "Alcohol", level: "high", description: "Increased risk of liver damage" },
            { drug: "Isoniazid", level: "medium", description: "Increased risk of liver toxicity" }
        ],
        safety: "Overdose can cause serious liver damage. Do not exceed recommended dosage. Seek immediate medical attention if overdose is suspected."
    },

    "Ibuprofen": {
        class: "NSAID (Nonsteroidal Anti-inflammatory Drug)",
        brandNames: "Advil, Motrin, Nurofen",
        administration: "Oral",
        halfLife: "2-4 hours",
        uses: "Ibuprofen is used to reduce fever and treat pain or inflammation caused by many conditions such as headache, toothache, back pain, arthritis, menstrual cramps, or minor injury.",
        dosage: "Adults: 200-400 mg every 4-6 hours. Maximum 1200 mg per day. For arthritis: up to 3200 mg daily in divided doses.",
        sideEffects: [
            "Upset stomach",
            "Heartburn",
            "Dizziness",
            "Headache",
            "Rash",
            "Fluid retention"
        ],
        interactions: [
            { drug: "Aspirin", level: "medium", description: "May increase risk of gastrointestinal bleeding" },
            { drug: "Warfarin", level: "high", description: "Increased risk of bleeding" },
            { drug: "Lithium", level: "medium", description: "May increase lithium levels" }
        ],
        safety: "Increased risk of heart attack or stroke. May cause stomach or intestinal bleeding. Do not use during last trimester of pregnancy."
    },

    "Pseudoephedrine": {
        class: "Decongestant",
        brandNames: "Sudafed, Drixoral, Cenafed",
        administration: "Oral",
        halfLife: "4-8 hours",
        uses: "Pseudoephedrine is used for the temporary relief of nasal congestion due to the common cold, hay fever, or other upper respiratory allergies.",
        dosage: "Adults: 60 mg every 4-6 hours. Maximum 240 mg in 24 hours. Extended-release: 120 mg every 12 hours.",
        sideEffects: [
            "Nervousness",
            "Restlessness",
            "Dizziness",
            "Headache",
            "Trouble sleeping",
            "Increased blood pressure"
        ],
        interactions: [
            { drug: "MAO inhibitors", level: "high", description: "May cause dangerous increase in blood pressure" },
            { drug: "Blood pressure medications", level: "medium", description: "May reduce effectiveness" },
            { drug: "Stimulants", level: "medium", description: "Increased risk of side effects" }
        ],
        safety: "Do not use if you have severe high blood pressure, heart disease, or are taking MAO inhibitors. May cause insomnia."
    },

    "Phenylephrine": {
        class: "Decongestant",
        brandNames: "Sudafed PE, Neo-Synephrine",
        administration: "Oral, Nasal spray",
        halfLife: "2-3 hours",
        uses: "Phenylephrine is used for the temporary relief of nasal congestion due to the common cold, hay fever, or other upper respiratory allergies.",
        dosage: "Oral: 10 mg every 4 hours. Nasal: 2-3 sprays in each nostril every 4 hours.",
        sideEffects: [
            "Headache",
            "Dizziness",
            "Nervousness",
            "Nausea",
            "Trouble sleeping",
            "Increased blood pressure"
        ],
        interactions: [
            { drug: "MAO inhibitors", level: "high", description: "May cause dangerous increase in blood pressure" },
            { drug: "Beta-blockers", level: "medium", description: "May increase blood pressure" },
            { drug: "Ergot medications", level: "medium", description: "Increased risk of ergot toxicity" }
        ],
        safety: "Do not use if you have high blood pressure, heart disease, diabetes, or thyroid problems without consulting your doctor."
    },

    "Dextromethorphan": {
        class: "Antitussive",
        brandNames: "Robitussin, Delsym, Vicks Formula 44",
        administration: "Oral",
        halfLife: "2-4 hours",
        uses: "Dextromethorphan is used for the temporary relief of cough caused by the common cold, bronchitis, and other breathing illnesses.",
        dosage: "Adults: 10-20 mg every 4 hours or 30 mg every 6-8 hours. Maximum 120 mg per day.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Nausea",
            "Stomach upset",
            "Nervousness"
        ],
        interactions: [
            { drug: "MAO inhibitors", level: "high", description: "May cause serious reactions" },
            { drug: "SSRI antidepressants", level: "medium", description: "Risk of serotonin syndrome" },
            { drug: "Alcohol", level: "medium", description: "Increased drowsiness" }
        ],
        safety: "Do not use with MAO inhibitors. May cause drowsiness - avoid driving or operating machinery. Do not exceed recommended dosage."
    },

    "Guaifenesin": {
        class: "Expectorant",
        brandNames: "Mucinex, Robitussin Chest Congestion",
        administration: "Oral",
        halfLife: "1 hour",
        uses: "Guaifenesin is used to help clear mucus or phlegm from the chest when you have congestion from a cold or flu.",
        dosage: "Adults: 200-400 mg every 4 hours. Maximum 2400 mg per day. Extended-release: 600-1200 mg every 12 hours.",
        sideEffects: [
            "Nausea",
            "Vomiting",
            "Stomach pain",
            "Dizziness",
            "Headache",
            "Rash"
        ],
        interactions: [
            { drug: "Cough suppressants", level: "low", description: "May counteract effects" },
            { drug: "None significant", level: "low", description: "Few clinically significant interactions" }
        ],
        safety: "Drink plenty of fluids while taking this medication. Contact doctor if cough lasts more than 7 days or is accompanied by fever."
    },

    "Diphenhydramine": {
        class: "Antihistamine",
        brandNames: "Benadryl, Sominex, Nytol",
        administration: "Oral, Topical, Injection",
        halfLife: "2-8 hours",
        uses: "Diphenhydramine is used to relieve symptoms of allergies, hay fever, and the common cold. Also used as a sleep aid and for motion sickness.",
        dosage: "Adults: 25-50 mg every 4-6 hours. Maximum 300 mg per day. For sleep: 50 mg at bedtime.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Dry mouth/nose/throat",
            "Upset stomach",
            "Blurred vision",
            "Headache"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Increased drowsiness and impairment" },
            { drug: "Other sedatives", level: "high", description: "Increased CNS depression" },
            { drug: "MAO inhibitors", level: "medium", description: "Increased anticholinergic effects" }
        ],
        safety: "May cause severe drowsiness. Avoid alcohol. Do not use while driving or operating machinery. Not recommended for elderly patients."
    },

    "Chlorpheniramine": {
        class: "Antihistamine",
        brandNames: "Chlor-Trimeton, Aller-Chlor",
        administration: "Oral",
        halfLife: "12-43 hours",
        uses: "Chlorpheniramine is used to treat symptoms of allergies, hay fever, and the common cold such as sneezing, itching, watery eyes, and runny nose.",
        dosage: "Adults: 4 mg every 4-6 hours. Maximum 24 mg per day. Extended-release: 8-12 mg every 8-12 hours.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Dry mouth/nose/throat",
            "Upset stomach",
            "Headache",
            "Increased appetite"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Increased drowsiness" },
            { drug: "Sedatives", level: "medium", description: "Increased CNS depression" },
            { drug: "MAO inhibitors", level: "medium", description: "Increased anticholinergic effects" }
        ],
        safety: "May cause drowsiness. Use caution when driving or operating machinery. Avoid alcohol. Not recommended for children under 6 years."
    },

    "Loratadine": {
        class: "Antihistamine (Second Generation)",
        brandNames: "Claritin, Alavert",
        administration: "Oral",
        halfLife: "8-28 hours",
        uses: "Loratadine is used to relieve symptoms of seasonal allergies and chronic hives such as sneezing, runny nose, and itchy/watery eyes.",
        dosage: "Adults and children 6+: 10 mg once daily. Children 2-5: 5 mg once daily.",
        sideEffects: [
            "Headache",
            "Drowsiness",
            "Fatigue",
            "Dry mouth",
            "Nervousness",
            "Stomach upset"
        ],
        interactions: [
            { drug: "Erythromycin", level: "low", description: "May increase loratadine levels" },
            { drug: "Ketoconazole", level: "low", description: "May increase loratadine levels" },
            { drug: "Alcohol", level: "low", description: "Minimal interaction" }
        ],
        safety: "Generally non-sedating. May be taken with or without food. Safe for most patients including those with glaucoma or prostate problems."
    },

    "Cetirizine": {
        class: "Antihistamine (Second Generation)",
        brandNames: "Zyrtec, Aller-Tec",
        administration: "Oral",
        halfLife: "8-11 hours",
        uses: "Cetirizine is used to relieve symptoms of seasonal and perennial allergies, as well as chronic hives.",
        dosage: "Adults and children 6+: 5-10 mg once daily. Children 2-5: 2.5-5 mg once daily.",
        sideEffects: [
            "Drowsiness",
            "Fatigue",
            "Dry mouth",
            "Headache",
            "Sore throat",
            "Stomach pain"
        ],
        interactions: [
            { drug: "Alcohol", level: "medium", description: "May increase drowsiness" },
            { drug: "Theophylline", level: "low", description: "Slight decrease in cetirizine clearance" },
            { drug: "CNS depressants", level: "low", description: "Minimal interaction" }
        ],
        safety: "May cause drowsiness, especially at higher doses. Use caution when driving or operating machinery. Generally safe for long-term use."
    },

    "Oseltamivir": {
        class: "Antiviral (Neuraminidase Inhibitor)",
        brandNames: "Tamiflu",
        administration: "Oral",
        halfLife: "1-10 hours",
        uses: "Oseltamivir is used to treat and prevent influenza (flu) caused by influenza A and B viruses.",
        dosage: "Treatment: 75 mg twice daily for 5 days. Prevention: 75 mg once daily for at least 10 days.",
        sideEffects: [
            "Nausea",
            "Vomiting",
            "Headache",
            "Diarrhea",
            "Stomach pain",
            "Dizziness"
        ],
        interactions: [
            { drug: "Probenecid", level: "medium", description: "May increase oseltamivir levels" },
            { drug: "Live influenza vaccine", level: "medium", description: "May reduce vaccine effectiveness" },
            { drug: "None significant", level: "low", description: "Few clinically significant interactions" }
        ],
        safety: "Most effective when started within 48 hours of flu symptoms. Not a substitute for flu vaccine. May cause neuropsychiatric events."
    },

    "Zanamivir": {
        class: "Antiviral (Neuraminidase Inhibitor)",
        brandNames: "Relenza",
        administration: "Inhalation",
        halfLife: "2.5-5 hours",
        uses: "Zanamivir is used to treat influenza A and B virus infections in patients who have been symptomatic for no more than 2 days.",
        dosage: "Two 5 mg inhalations (10 mg total) twice daily for 5 days.",
        sideEffects: [
            "Diarrhea",
            "Nausea",
            "Sinusitis",
            "Nasal signs and symptoms",
            "Bronchitis",
            "Cough",
            "Headache",
            "Dizziness"
        ],
        interactions: [
            { drug: "Live influenza vaccine", level: "medium", description: "May reduce vaccine effectiveness" },
            { drug: "Inhaled medications", level: "low", description: "No significant interactions reported" }
        ],
        safety: "Not recommended for patients with underlying respiratory disease. May cause bronchospasm. Use inhaler device properly."
    },

    "Acetaminophen": {
        class: "Analgesic/Antipyretic",
        brandNames: "Tylenol, Panadol, FeverAll",
        administration: "Oral, Rectal, IV",
        halfLife: "1-4 hours",
        uses: "Acetaminophen is used to treat mild to moderate pain and to reduce fever. It is the same medication as Paracetamol.",
        dosage: "Adults: 325-1000 mg every 4-6 hours. Maximum 4000 mg per day. Children: 10-15 mg/kg every 4-6 hours.",
        sideEffects: [
            "Nausea",
            "Stomach pain",
            "Loss of appetite",
            "Headache",
            "Dark urine",
            "Jaundice"
        ],
        interactions: [
            { drug: "Warfarin", level: "high", description: "May increase risk of bleeding" },
            { drug: "Alcohol", level: "high", description: "Increased risk of liver damage" },
            { drug: "Isoniazid", level: "medium", description: "Increased risk of liver toxicity" }
        ],
        safety: "Overdose can cause fatal liver damage. Do not exceed recommended dosage. Many combination products contain acetaminophen - check labels carefully."
    },

    "Codeine": {
        class: "Opioid Analgesic",
        brandNames: "Various combination products",
        administration: "Oral",
        halfLife: "2.5-4 hours",
        uses: "Codeine is used to treat mild to moderately severe pain. Also used as a cough suppressant in lower doses.",
        dosage: "Pain: 15-60 mg every 4-6 hours. Cough: 10-20 mg every 4-6 hours. Maximum 360 mg daily.",
        sideEffects: [
            "Drowsiness",
            "Dizziness",
            "Nausea",
            "Vomiting",
            "Constipation",
            "Lightheadedness",
            "Sweating"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "Increased CNS depression" },
            { drug: "Benzodiazepines", level: "high", description: "Increased respiratory depression" },
            { drug: "MAO inhibitors", level: "high", description: "Serious reactions possible" }
        ],
        safety: "Risk of addiction, abuse, and misuse. May cause life-threatening respiratory depression. Not recommended for children."
    },

    "Naproxen": {
        class: "NSAID (Nonsteroidal Anti-inflammatory Drug)",
        brandNames: "Aleve, Naprosyn, Anaprox",
        administration: "Oral",
        halfLife: "12-17 hours",
        uses: "Naproxen is used to treat pain or inflammation caused by conditions such as arthritis, ankylosing spondylitis, tendinitis, bursitis, gout, or menstrual cramps.",
        dosage: "Adults: 250-500 mg twice daily. Maximum 1250 mg daily. Delayed-release: 375-500 mg twice daily.",
        sideEffects: [
            "Heartburn",
            "Stomach pain",
            "Nausea",
            "Headache",
            "Dizziness",
            "Drowsiness"
        ],
        interactions: [
            { drug: "Warfarin", level: "high", description: "Increased risk of bleeding" },
            { drug: "Lithium", level: "medium", description: "May increase lithium levels" },
            { drug: "Methotrexate", level: "medium", description: "May increase methotrexate toxicity" }
        ],
        safety: "Increased risk of heart attack, stroke, and gastrointestinal bleeding. Take with food to reduce stomach upset. Do not use during last trimester of pregnancy."
    },

    "Bromhexine": {
        class: "Mucolytic",
        brandNames: "Bisolvon, Broxin",
        administration: "Oral",
        halfLife: "6-8 hours",
        uses: "Bromhexine is used to help clear mucus from the airways in conditions such as chronic bronchitis, asthma, and other respiratory disorders.",
        dosage: "Adults: 8-16 mg three times daily. Children: 4 mg three times daily.",
        sideEffects: [
            "Gastrointestinal upset",
            "Nausea",
            "Vomiting",
            "Diarrhea",
            "Headache",
            "Dizziness",
            "Rash"
        ],
        interactions: [
            { drug: "Antibiotics", level: "low", description: "May increase antibiotic penetration into lung tissue" },
            { drug: "None significant", level: "low", description: "Few clinically significant interactions" }
        ],
        safety: "Drink plenty of fluids while taking this medication. Not recommended during first trimester of pregnancy. Use with caution in patients with gastric ulcers."
    },

    "Ambroxol": {
        class: "Mucolytic",
        brandNames: "Mucosolvan, Lasolvan",
        administration: "Oral, Inhalation",
        halfLife: "7-12 hours",
        uses: "Ambroxol is used to treat respiratory diseases associated with viscid mucus. It helps clear mucus from the airways.",
        dosage: "Adults: 30 mg three times daily. Maximum 120 mg daily. Extended-release: 75 mg once or twice daily.",
        sideEffects: [
            "Gastrointestinal discomfort",
            "Nausea",
            "Vomiting",
            "Diarrhea",
            "Dyspepsia",
            "Rash",
            "Headache"
        ],
        interactions: [
            { drug: "Antibiotics", level: "low", description: "May increase antibiotic concentration in lung tissue" },
            { drug: "Cough suppressants", level: "low", description: "May counteract effects" }
        ],
        safety: "Drink plenty of fluids. Not recommended during first trimester of pregnancy. Use with caution in patients with gastric ulcers."
    },

    "Oxymetazoline": {
        class: "Decongestant",
        brandNames: "Afrin, Dristan, Vicks Sinex",
        administration: "Nasal spray",
        halfLife: "5-8 hours",
        uses: "Oxymetazoline is used for the temporary relief of nasal congestion due to the common cold, hay fever, or other upper respiratory allergies.",
        dosage: "Adults and children 6+: 2-3 sprays in each nostril every 10-12 hours. Do not use for more than 3 days.",
        sideEffects: [
            "Temporary burning",
            "Stinging",
            "Sneezing",
            "Dry nose",
            "Increased nasal congestion",
            "Headache"
        ],
        interactions: [
            { drug: "MAO inhibitors", level: "medium", description: "May increase blood pressure" },
            { drug: "None significant", level: "low", description: "Few systemic interactions due to topical use" }
        ],
        safety: "Do not use for more than 3 days. Rebound congestion may occur with prolonged use. Not recommended for children under 6 years."
    },

    "Xylometazoline": {
        class: "Decongestant",
        brandNames: "Otrivin, Nasivin",
        administration: "Nasal spray/drops",
        halfLife: "Unknown",
        uses: "Xylometazoline is used for the temporary relief of nasal congestion due to the common cold, sinusitis, hay fever, or other respiratory allergies.",
        dosage: "Adults and children 12+: 1 spray or 2-3 drops in each nostril every 8-10 hours. Do not use for more than 3-5 days.",
        sideEffects: [
            "Temporary burning",
            "Stinging",
            "Sneezing",
            "Dry nose",
            "Headache",
            "Nervousness"
        ],
        interactions: [
            { drug: "MAO inhibitors", level: "medium", description: "May increase blood pressure" },
            { drug: "Tricyclic antidepressants", level: "low", description: "Possible increased effects" }
        ],
        safety: "Risk of rebound congestion with prolonged use. Do not use for more than 3-5 days continuously. Not recommended for children under 12 years."
    },

    "Camphor": {
        class: "Topical Analgesic",
        brandNames: "Vicks VapoRub, Tiger Balm",
        administration: "Topical",
        halfLife: "Unknown",
        uses: "Camphor is used topically to relieve pain, itching, and irritation. Also used as a cough suppressant in vaporized form.",
        dosage: "Apply to affected area 3-4 times daily. Do not use on broken skin.",
        sideEffects: [
            "Skin irritation",
            "Redness",
            "Burning sensation",
            "Allergic reactions"
        ],
        interactions: [
            { drug: "None significant", level: "low", description: "Minimal systemic absorption when used topically" }
        ],
        safety: "For external use only. Do not ingest - can be toxic if swallowed. Do not apply to broken skin. Keep away from eyes and mucous membranes."
    },

    "Menthol": {
        class: "Topical Analgesic/Cooling Agent",
        brandNames: "Vicks VapoRub, Bengay, Icy Hot",
        administration: "Topical, Inhalation",
        halfLife: "Unknown",
        uses: "Menthol is used topically to relieve minor aches and pains, and as an inhalant to relieve cough and nasal congestion.",
        dosage: "Apply to affected area 3-4 times daily. For inhalation: use as directed on product.",
        sideEffects: [
            "Mild skin irritation",
            "Redness",
            "Allergic reactions"
        ],
        interactions: [
            { drug: "None significant", level: "low", description: "Minimal systemic absorption when used properly" }
        ],
        safety: "For external use only. Do not apply to broken skin. Do not use on children under 2 years. May cause skin sensitivity in some individuals."
    },

    "Phenylpropanolamine": {
        class: "Decongestant",
        brandNames: "Previously in many cold medications",
        administration: "Oral",
        halfLife: "3-4 hours",
        uses: "Phenylpropanolamine was used for the temporary relief of nasal congestion due to the common cold, hay fever, or other upper respiratory allergies.",
        dosage: "Previously: 25 mg every 4 hours or 75 mg extended-release every 12 hours.",
        sideEffects: [
            "Headache",
            "Dizziness",
            "Nervousness",
            "Insomnia",
            "Increased blood pressure",
            "Rapid heart rate"
        ],
        interactions: [
            { drug: "MAO inhibitors", level: "high", description: "Dangerous increase in blood pressure" },
            { drug: "Blood pressure medications", level: "medium", description: "May reduce effectiveness" },
            { drug: "Stimulants", level: "medium", description: "Increased risk of side effects" }
        ],
        safety: "Removed from market in many countries due to increased risk of hemorrhagic stroke. Not recommended for use. Safer alternatives available."
    },
    "Amoxicillin": {
        class: "Penicillin Antibiotic",
        brandNames: "Amoxil, Trimox, Moxatag",
        administration: "Oral",
        halfLife: "61.3 minutes",
        uses: "Amoxicillin is used to treat many different types of bacterial infections, such as tonsillitis, bronchitis, pneumonia, and infections of the ear, nose, throat, skin, or urinary tract.",
        dosage: "Adults: 250-500 mg every 8 hours or 500-875 mg every 12 hours. Children: 20-90 mg/kg/day in divided doses every 8-12 hours.",
        sideEffects: [
            "Nausea",
            "Vomiting",
            "Diarrhea",
            "Stomach pain",
            "Skin rash",
            "Vaginal itching or discharge"
        ],
        interactions: [
            { drug: "Methotrexate", level: "high", description: "May increase methotrexate toxicity" },
            { drug: "Oral contraceptives", level: "medium", description: "May reduce contraceptive effectiveness" },
            { drug: "Warfarin", level: "medium", description: "May increase anticoagulant effect" },
            { drug: "Allopurinol", level: "medium", description: "Increased risk of skin rash" }
        ],
        safety: "May cause severe allergic reactions in penicillin-sensitive patients. Complete the full course of treatment even if symptoms disappear. May cause antibiotic-associated colitis."
    },

    "Azithromycin": {
        class: "Macrolide Antibiotic",
        brandNames: "Zithromax, Z-Pak, Azithrocin",
        administration: "Oral, IV",
        halfLife: "68 hours",
        uses: "Azithromycin is used to treat many different types of bacterial infections, including respiratory infections, skin infections, ear infections, and sexually transmitted diseases.",
        dosage: "Common dosage: 500 mg on day 1, then 250 mg daily for days 2-5. Single dose of 1 gram for some STIs.",
        sideEffects: [
            "Diarrhea",
            "Nausea",
            "Abdominal pain",
            "Headache",
            "Dizziness"
        ],
        interactions: [
            { drug: "Antacids", level: "medium", description: "Take azithromycin 1 hour before or 2 hours after antacids" },
            { drug: "Warfarin", level: "high", description: "May increase anticoagulant effect" },
            { drug: "Nelfinavir", level: "high", description: "Increased azithromycin levels" }
        ],
        safety: "May cause serious heart rhythm problems. Use with caution in patients with existing heart conditions. May worsen myasthenia gravis."
    },

    "Clarithromycin": {
        class: "Macrolide Antibiotic",
        brandNames: "Biaxin, Klaricid",
        administration: "Oral",
        halfLife: "3-4 hours",
        uses: "Clarithromycin is used to treat various bacterial infections, including respiratory tract infections, skin infections, and Helicobacter pylori infections.",
        dosage: "Adults: 250-500 mg every 12 hours for 7-14 days. Take with or without food.",
        sideEffects: [
            "Diarrhea",
            "Nausea",
            "Abnormal taste",
            "Headache",
            "Stomach pain"
        ],
        interactions: [
            { drug: "Statins", level: "high", description: "Increased risk of muscle problems" },
            { drug: "Colchicine", level: "high", description: "Increased colchicine toxicity" },
            { drug: "Warfarin", level: "high", description: "Increased anticoagulant effect" }
        ],
        safety: "May cause serious heart rhythm problems. Contraindicated with certain medications due to CYP3A4 inhibition. Monitor for liver function abnormalities."
    },

    "Doxycycline": {
        class: "Tetracycline Antibiotic",
        brandNames: "Vibramycin, Doryx, Monodox",
        administration: "Oral, IV",
        halfLife: "18-22 hours",
        uses: "Doxycycline is used to treat many different bacterial infections, including acne, urinary tract infections, intestinal infections, and certain sexually transmitted diseases.",
        dosage: "Adults: 100 mg twice daily on first day, then 100 mg daily. For severe infections: 100 mg every 12 hours.",
        sideEffects: [
            "Nausea",
            "Vomiting",
            "Diarrhea",
            "Photosensitivity",
            "Tooth discoloration (in children)"
        ],
        interactions: [
            { drug: "Antacids", level: "high", description: "Reduced absorption - take 2 hours apart" },
            { drug: "Iron supplements", level: "high", description: "Reduced absorption - take 2 hours apart" },
            { drug: "Warfarin", level: "medium", description: "May increase anticoagulant effect" }
        ],
        safety: "May cause permanent tooth discoloration if used during tooth development. Avoid excessive sun exposure. Not recommended during pregnancy or in children under 8 years."
    },

    "Ciprofloxacin": {
        class: "Fluoroquinolone Antibiotic",
        brandNames: "Cipro, Cipro XR",
        administration: "Oral, IV, Ophthalmic",
        halfLife: "4 hours",
        uses: "Ciprofloxacin is used to treat different types of bacterial infections, including urinary tract infections, abdominal infections, and certain types of diarrhea.",
        dosage: "Adults: 250-750 mg every 12 hours. Duration depends on type and severity of infection.",
        sideEffects: [
            "Nausea",
            "Diarrhea",
            "Headache",
            "Dizziness",
            "Tendon inflammation or rupture"
        ],
        interactions: [
            { drug: "Theophylline", level: "high", description: "Increased theophylline levels" },
            { drug: "Antacids", level: "high", description: "Reduced absorption - take 2 hours apart" },
            { drug: "Warfarin", level: "high", description: "Increased anticoagulant effect" }
        ],
        safety: "May cause tendon inflammation or rupture, especially in elderly patients. May worsen muscle weakness in patients with myasthenia gravis. Serious side effects may include peripheral neuropathy."
    },

    "Levofloxacin": {
        class: "Fluoroquinolone Antibiotic",
        brandNames: "Levaquin, Tavanic",
        administration: "Oral, IV, Ophthalmic",
        halfLife: "6-8 hours",
        uses: "Levofloxacin is used to treat various bacterial infections, including pneumonia, skin infections, and urinary tract infections.",
        dosage: "Adults: 250-750 mg once daily. Duration varies by infection type.",
        sideEffects: [
            "Nausea",
            "Diarrhea",
            "Headache",
            "Insomnia",
            "Tendon problems"
        ],
        interactions: [
            { drug: "Antacids", level: "high", description: "Reduced absorption - take 2 hours apart" },
            { drug: "NSAIDs", level: "medium", description: "Increased risk of CNS stimulation" },
            { drug: "Warfarin", level: "high", description: "Increased anticoagulant effect" }
        ],
        safety: "Risk of tendonitis and tendon rupture. May cause peripheral neuropathy. Use with caution in patients with CNS disorders. Avoid in patients with myasthenia gravis."
    },

    "Metronidazole": {
        class: "Nitroimidazole Antibiotic",
        brandNames: "Flagyl, MetroCream, Noritate",
        administration: "Oral, IV, Topical, Vaginal",
        halfLife: "8 hours",
        uses: "Metronidazole is used to treat various parasitic and bacterial infections, including abdominal infections, gynecological infections, and certain types of diarrhea.",
        dosage: "Adults: 500 mg three times daily or 750 mg three times daily. Duration depends on infection type.",
        sideEffects: [
            "Nausea",
            "Headache",
            "Metallic taste",
            "Dark urine",
            "Dizziness"
        ],
        interactions: [
            { drug: "Alcohol", level: "high", description: "May cause disulfiram-like reaction" },
            { drug: "Warfarin", level: "high", description: "Increased anticoagulant effect" },
            { drug: "Lithium", level: "medium", description: "May increase lithium levels" }
        ],
        safety: "Avoid alcohol during treatment and for at least 3 days after completion. May cause neurological side effects with prolonged use. Use with caution in patients with liver disease."
    },

    "Clindamycin": {
        class: "Lincosamide Antibiotic",
        brandNames: "Cleocin, Dalacin, Clindagel",
        administration: "Oral, IV, Topical, Vaginal",
        halfLife: "2-3 hours",
        uses: "Clindamycin is used to treat serious bacterial infections, including bone infections, abdominal infections, and certain types of pneumonia.",
        dosage: "Adults: 150-450 mg every 6-8 hours. Severe infections may require higher doses.",
        sideEffects: [
            "Diarrhea",
            "Nausea",
            "Vomiting",
            "Abdominal pain",
            "Skin rash"
        ],
        interactions: [
            { drug: "Neuromuscular blocking agents", level: "high", description: "Enhanced neuromuscular blockade" },
            { drug: "Erythromycin", level: "medium", description: "Antagonistic effect" }
        ],
        safety: "High risk of causing Clostridium difficile-associated diarrhea. Use with caution in patients with gastrointestinal diseases. Monitor for signs of pseudomembranous colitis."
    },

    "Cephalexin": {
        class: "First-generation Cephalosporin",
        brandNames: "Keflex, Ceporex",
        administration: "Oral",
        halfLife: "0.5-1.2 hours",
        uses: "Cephalexin is used to treat bacterial infections in different parts of the body, including respiratory tract infections, ear infections, skin infections, and bone infections.",
        dosage: "Adults: 250-500 mg every 6 hours. Maximum dose 4 grams per day.",
        sideEffects: [
            "Diarrhea",
            "Nausea",
            "Vomiting",
            "Stomach pain",
            "Skin rash"
        ],
        interactions: [
            { drug: "Metformin", level: "medium", description: "May increase metformin levels" },
            { drug: "Probenecid", level: "medium", description: "May increase cephalexin levels" }
        ],
        safety: "May cause allergic reactions in penicillin-sensitive patients. Use with caution in patients with renal impairment. May cause antibiotic-associated diarrhea."
    },

    "Ceftriaxone": {
        class: "Third-generation Cephalosporin",
        brandNames: "Rocephin",
        administration: "IV, IM",
        halfLife: "5.8-8.7 hours",
        uses: "Ceftriaxone is used to treat many kinds of bacterial infections, including serious infections such as meningitis, and infections of the lungs, ears, skin, urinary tract, and blood.",
        dosage: "Adults: 1-2 grams once daily. Meningitis: 2 grams every 12 hours.",
        sideEffects: [
            "Diarrhea",
            "Rash",
            "Pain at injection site",
            "Elevated liver enzymes",
            "Gallbladder complications"
        ],
        interactions: [
            { drug: "Calcium-containing products", level: "high", description: "Risk of precipitation in neonates" },
            { drug: "Warfarin", level: "medium", description: "May increase anticoagulant effect" }
        ],
        safety: "May cause severe skin reactions. Use with caution in patients with gallbladder disease. Monitor for signs of hemolytic anemia. Not to be administered with calcium-containing solutions in neonates."
    },

    "Cefuroxime": {
        class: "Second-generation Cephalosporin",
        brandNames: "Ceftin, Zinacef",
        administration: "Oral, IV, IM",
        halfLife: "1-2 hours",
        uses: "Cefuroxime is used to treat bacterial infections of the ear, throat, lungs, urinary tract, and skin. It is also used to treat gonorrhea.",
        dosage: "Adults: 250-500 mg twice daily. Maximum dose 1 gram per day.",
        sideEffects: [
            "Diarrhea",
            "Nausea",
            "Vomiting",
            "Headache",
            "Vaginal itching"
        ],
        interactions: [
            { drug: "Probenecid", level: "medium", description: "May increase cefuroxime levels" },
            { drug: "Antacids", level: "medium", description: "May reduce absorption" }
        ],
        safety: "May cause allergic reactions in penicillin-sensitive patients. Use with caution in patients with gastrointestinal disease. Complete full course of treatment."
    },

    "Cefotaxime": {
        class: "Third-generation Cephalosporin",
        brandNames: "Claforan",
        administration: "IV, IM",
        halfLife: "1 hour",
        uses: "Cefotaxime is used to treat serious infections caused by susceptible bacteria, including meningitis, sepsis, and infections of the respiratory tract, urinary tract, and abdomen.",
        dosage: "Adults: 1-2 grams every 6-8 hours. Severe infections: 2 grams every 4 hours.",
        sideEffects: [
            "Diarrhea",
            "Rash",
            "Pain at injection site",
            "Fever",
            "Headache"
        ],
        interactions: [
            { drug: "Aminoglycosides", level: "medium", description: "Increased risk of kidney damage" },
            { drug: "Probenecid", level: "medium", description: "May increase cefotaxime levels" }
        ],
        safety: "May cause severe skin reactions. Use with caution in patients with renal impairment. Monitor for signs of superinfection."
    },

    "Penicillin G": {
        class: "Natural Penicillin",
        brandNames: "Pfizerpen, Pentids",
        administration: "IV, IM",
        halfLife: "30-60 minutes",
        uses: "Penicillin G is used to treat many different types of severe infections, including syphilis, meningitis, endocarditis, and serious respiratory infections.",
        dosage: "Dose varies widely by infection type. Range: 1-24 million units per day in divided doses.",
        sideEffects: [
            "Allergic reactions",
            "Diarrhea",
            "Nausea",
            "Fever",
            "Rash"
        ],
        interactions: [
            { drug: "Probenecid", level: "medium", description: "Increased penicillin levels" },
            { drug: "Tetracyclines", level: "medium", description: "Antagonistic effect" }
        ],
        safety: "High risk of allergic reactions. Perform skin test in patients with penicillin allergy history. Use with caution in patients with renal impairment."
    },

    "Ampicillin": {
        class: "Aminopenicillin",
        brandNames: "Principen, Omnipen",
        administration: "Oral, IV, IM",
        halfLife: "1-1.8 hours",
        uses: "Ampicillin is used to treat many different types of infections caused by bacteria, such as ear infections, bladder infections, pneumonia, and salmonella infections.",
        dosage: "Adults: 250-500 mg every 6 hours. Severe infections: 1-2 grams every 4-6 hours.",
        sideEffects: [
            "Diarrhea",
            "Nausea",
            "Rash",
            "Vaginal itching",
            "Headache"
        ],
        interactions: [
            { drug: "Allopurinol", level: "medium", description: "Increased risk of rash" },
            { drug: "Oral contraceptives", level: "medium", description: "May reduce effectiveness" }
        ],
        safety: "May cause severe allergic reactions. High incidence of rash, especially with concurrent viral infections. Use with caution in patients with mononucleosis."
    },

    "Vancomycin": {
        class: "Glycopeptide Antibiotic",
        brandNames: "Vancocin, Firvanq",
        administration: "Oral, IV",
        halfLife: "4-6 hours",
        uses: "Vancomycin is used to treat serious bacterial infections caused by susceptible strains of methicillin-resistant Staphylococcus aureus (MRSA).",
        dosage: "IV: 15-20 mg/kg every 8-12 hours. Oral: 125-500 mg every 6 hours for C. difficile.",
        sideEffects: [
            "Nephrotoxicity",
            "Ototoxicity",
            "Red man syndrome",
            "Thrombophlebitis",
            "Fever"
        ],
        interactions: [
            { drug: "Aminoglycosides", level: "high", description: "Increased risk of kidney damage" },
            { drug: "Anesthetic agents", level: "medium", description: "Increased risk of hypotension" }
        ],
        safety: "Monitor serum levels to avoid toxicity. Risk of nephrotoxicity and ototoxicity. Infuse slowly to prevent red man syndrome. Use with caution in patients with renal impairment."
    },

    "Linezolid": {
        class: "Oxazolidinone Antibiotic",
        brandNames: "Zyvox, Zyvoxam",
        administration: "Oral, IV",
        halfLife: "5 hours",
        uses: "Linezolid is used to treat certain serious bacterial infections that have not responded to other antibiotics, including MRSA and VRE infections.",
        dosage: "Adults: 600 mg every 12 hours. Duration typically 10-28 days.",
        sideEffects: [
            "Diarrhea",
            "Nausea",
            "Headache",
            "Myelosuppression",
            "Peripheral neuropathy"
        ],
        interactions: [
            { drug: "SSRIs", level: "high", description: "Risk of serotonin syndrome" },
            { drug: "MAOIs", level: "high", description: "Risk of hypertensive crisis" },
            { drug: "Tyramine-rich foods", level: "medium", description: "Possible pressor response" }
        ],
        safety: "May cause bone marrow suppression with prolonged use. Monitor blood counts weekly. Risk of peripheral and optic neuropathy with extended use. Avoid in patients taking SSRIs."
    },

    "Gentamicin": {
        class: "Aminoglycoside Antibiotic",
        brandNames: "Garamycin, Gentak",
        administration: "IV, IM, Topical, Ophthalmic",
        halfLife: "2-3 hours",
        uses: "Gentamicin is used to treat serious bacterial infections caused by susceptible strains, including sepsis, meningitis, and urinary tract infections.",
        dosage: "3-5 mg/kg/day in divided doses every 8 hours. Monitor serum levels.",
        sideEffects: [
            "Nephrotoxicity",
            "Ototoxicity",
            "Neuromuscular blockade",
            "Nausea",
            "Rash"
        ],
        interactions: [
            { drug: "Other nephrotoxic drugs", level: "high", description: "Increased kidney damage risk" },
            { drug: "Neuromuscular blockers", level: "high", description: "Enhanced paralysis" },
            { drug: "Loop diuretics", level: "medium", description: "Increased ototoxicity risk" }
        ],
        safety: "Monitor serum levels to avoid toxicity. High risk of kidney damage and hearing loss. Use with caution in patients with renal impairment. Hydrate patient during therapy."
    },

    "Tobramycin": {
        class: "Aminoglycoside Antibiotic",
        brandNames: "Nebcin, Tobi, Tobrex",
        administration: "IV, IM, Inhalation, Ophthalmic",
        halfLife: "2-3 hours",
        uses: "Tobramycin is used to treat serious bacterial infections, especially Pseudomonas aeruginosa infections, and for inhalation in cystic fibrosis patients.",
        dosage: "IV: 3-5 mg/kg/day in divided doses. Inhalation: 300 mg twice daily.",
        sideEffects: [
            "Nephrotoxicity",
            "Ototoxicity",
            "Neuromuscular blockade",
            "Respiratory paralysis",
            "Rash"
        ],
        interactions: [
            { drug: "Other aminoglycosides", level: "high", description: "Increased toxicity" },
            { drug: "Vancomycin", level: "high", description: "Increased kidney damage risk" },
            { drug: "Loop diuretics", level: "medium", description: "Increased ototoxicity risk" }
        ],
        safety: "Monitor serum levels carefully. Risk of permanent hearing loss and kidney damage. Use with caution in patients with neuromuscular disorders. Maintain adequate hydration."
    },

    "Erythromycin": {
        class: "Macrolide Antibiotic",
        brandNames: "Ery-Tab, E.E.S., Eryc",
        administration: "Oral, IV, Topical, Ophthalmic",
        halfLife: "1.5-2 hours",
        uses: "Erythromycin is used to treat many different types of bacterial infections, including respiratory tract infections, skin infections, and certain sexually transmitted diseases.",
        dosage: "Adults: 250-500 mg every 6-12 hours. Maximum 4 grams per day.",
        sideEffects: [
            "Nausea",
            "Vomiting",
            "Diarrhea",
            "Abdominal pain",
            "Hearing loss (high doses)"
        ],
        interactions: [
            { drug: "Statins", level: "high", description: "Increased risk of muscle problems" },
            { drug: "Warfarin", level: "high", description: "Increased anticoagulant effect" },
            { drug: "Theophylline", level: "medium", description: "Increased theophylline levels" }
        ],
        safety: "May cause serious heart rhythm problems. High doses may cause reversible hearing loss. Use with caution in patients with liver disease. May cause gastrointestinal irritation."
    },

    "Tetracycline": {
        class: "Tetracycline Antibiotic",
        brandNames: "Sumycin, Panmycin",
        administration: "Oral",
        halfLife: "6-11 hours",
        uses: "Tetracycline is used to treat many different bacterial infections, including acne, urinary tract infections, and certain sexually transmitted diseases.",
        dosage: "Adults: 250-500 mg every 6 hours. Take on empty stomach.",
        sideEffects: [
            "Nausea",
            "Vomiting",
            "Diarrhea",
            "Photosensitivity",
            "Tooth discoloration"
        ],
        interactions: [
            { drug: "Antacids", level: "high", description: "Reduced absorption" },
            { drug: "Iron supplements", level: "high", description: "Reduced absorption" },
            { drug: "Oral contraceptives", level: "medium", description: "Reduced effectiveness" }
        ],
        safety: "Contraindicated in pregnancy and children under 8 years due to tooth discoloration. Avoid excessive sun exposure. May cause esophageal irritation - take with full glass of water."
    },

    "Sulfamethoxazole/Trimethoprim": {
        class: "Sulfonamide Antibiotic",
        brandNames: "Bactrim, Septra, Cotrim",
        administration: "Oral, IV",
        halfLife: "SMX: 9-11 hours, TMP: 8-10 hours",
        uses: "This combination antibiotic is used to treat various bacterial infections, including urinary tract infections, ear infections, bronchitis, and Pneumocystis jirovecii pneumonia.",
        dosage: "Adults: 1-2 DS tablets every 12 hours. PJP prophylaxis: 1 DS tablet daily.",
        sideEffects: [
            "Nausea",
            "Vomiting",
            "Rash",
            "Photosensitivity",
            "Blood dyscrasias"
        ],
        interactions: [
            { drug: "Warfarin", level: "high", description: "Increased anticoagulant effect" },
            { drug: "Methotrexate", level: "high", description: "Increased methotrexate toxicity" },
            { drug: "ACE inhibitors", level: "medium", description: "Increased risk of hyperkalemia" }
        ],
        safety: "May cause severe skin reactions including Stevens-Johnson syndrome. Monitor blood counts during prolonged therapy. Use with caution in patients with G6PD deficiency. Maintain adequate hydration."
    },

    "Rifampin": {
        class: "Rifamycin Antibiotic",
        brandNames: "Rifadin, Rimactane",
        administration: "Oral, IV",
        halfLife: "3-4 hours",
        uses: "Rifampin is used to treat tuberculosis and other bacterial infections. It is also used to eliminate meningococci from the nasopharynx of asymptomatic carriers.",
        dosage: "TB treatment: 10 mg/kg/day (max 600 mg). Meningococcal prophylaxis: 600 mg twice daily for 2 days.",
        sideEffects: [
            "Orange discoloration of body fluids",
            "Hepatotoxicity",
            "Nausea",
            "Rash",
            "Flu-like syndrome"
        ],
        interactions: [
            { drug: "Many medications", level: "high", description: "Strong CYP450 inducer" },
            { drug: "Oral contraceptives", level: "high", description: "Reduced effectiveness" },
            { drug: "Warfarin", level: "high", description: "Reduced anticoagulant effect" }
        ],
        safety: "Strong liver enzyme inducer - affects many medications. Monitor liver function tests. Body fluids may turn orange-red. Use with caution in patients with liver disease."
    },

    "Isoniazid": {
        class: "Antituberculosis Agent",
        brandNames: "INH, Nydrazid",
        administration: "Oral, IM",
        halfLife: "0.5-1.6 hours (fast acetylators), 2-5 hours (slow acetylators)",
        uses: "Isoniazid is used to treat and prevent tuberculosis. It is always used in combination with other antituberculosis medications.",
        dosage: "Treatment: 5 mg/kg/day (max 300 mg). Prophylaxis: 300 mg daily.",
        sideEffects: [
            "Peripheral neuropathy",
            "Hepatotoxicity",
            "Nausea",
            "Rash",
            "Pyridoxine deficiency"
        ],
        interactions: [
            { drug: "Antacids", level: "medium", description: "Reduced absorption" },
            { drug: "Phenytoin", level: "high", description: "Increased phenytoin levels" },
            { drug: "Carbamazepine", level: "high", description: "Increased carbamazepine levels" }
        ],
        safety: "High risk of liver toxicity - monitor liver enzymes. Give pyridoxine to prevent peripheral neuropathy. Use with caution in patients with alcohol use disorder."
    },

    "Meropenem": {
        class: "Carbapenem Antibiotic",
        brandNames: "Merrem",
        administration: "IV",
        halfLife: "1 hour",
        uses: "Meropenem is used to treat serious bacterial infections including meningitis, intra-abdominal infections, and complicated skin infections.",
        dosage: "Adults: 1 gram every 8 hours. Meningitis: 2 grams every 8 hours.",
        sideEffects: [
            "Diarrhea",
            "Nausea",
            "Headache",
            "Rash",
            "Seizures (high doses)"
        ],
        interactions: [
            { drug: "Valproic acid", level: "high", description: "Reduced valproic acid levels" },
            { drug: "Probenecid", level: "medium", description: "Increased meropenem levels" }
        ],
        safety: "May reduce valproic acid levels significantly. Use with caution in patients with CNS disorders due to seizure risk. Monitor for superinfection."
    },

    "Imipenem": {
        class: "Carbapenem Antibiotic",
        brandNames: "Primaxin",
        administration: "IV",
        halfLife: "1 hour",
        uses: "Imipenem is used to treat serious bacterial infections caused by susceptible organisms, including lower respiratory tract infections, urinary tract infections, and intra-abdominal infections.",
        dosage: "Adults: 250-500 mg every 6 hours. Severe infections: 1 gram every 6-8 hours.",
        sideEffects: [
            "Nausea",
            "Diarrhea",
            "Seizures",
            "Rash",
            "Phlebitis"
        ],
        interactions: [
            { drug: "Ganciclovir", level: "high", description: "Increased seizure risk" },
            { drug: "Probenecid", level: "medium", description: "Increased imipenem levels" }
        ],
        safety: "High risk of seizures, especially with renal impairment or CNS disorders. Always administered with cilastatin to prevent renal metabolism. Adjust dose in renal impairment."
    },

    "Aztreonam": {
        class: "Monobactam Antibiotic",
        brandNames: "Azactam, Cayston",
        administration: "IV, IM, Inhalation",
        halfLife: "1.7-2.9 hours",
        uses: "Aztreonam is used to treat infections caused by gram-negative bacteria, including Pseudomonas aeruginosa. Inhalation form is used for cystic fibrosis patients.",
        dosage: "IV: 1-2 grams every 6-12 hours. Inhalation: 75 mg three times daily.",
        sideEffects: [
            "Rash",
            "Diarrhea",
            "Nausea",
            "Chest discomfort (inhalation)",
            "Phlebitis"
        ],
        interactions: [
            { drug: "Cefoxitin", level: "medium", description: "Antagonistic effect" },
            { drug: "Imipenem", level: "medium", description: "Antagonistic effect" }
        ],
        safety: "Generally safe in penicillin-allergic patients. Monitor renal function with IV administration. Inhalation may cause bronchospasm - premedicate with bronchodilator."
    },

    "Fosfomycin": {
        class: "Phosphonic Acid Antibiotic",
        brandNames: "Monurol",
        administration: "Oral",
        halfLife: "5.7 hours",
        uses: "Fosfomycin is used to treat uncomplicated urinary tract infections in women. It is particularly effective against E. coli and Enterococcus faecalis.",
        dosage: "Single 3 gram sachet dissolved in water. Take on empty stomach.",
        sideEffects: [
            "Diarrhea",
            "Nausea",
            "Headache",
            "Vaginitis",
            "Dizziness"
        ],
        interactions: [
            { drug: "Metoclopramide", level: "medium", description: "Reduced fosfomycin levels" },
            { drug: "Antacids", level: "medium", description: "May reduce absorption" }
        ],
        safety: "Single-dose therapy for uncomplicated UTIs. Not recommended for complicated infections. Use with caution in patients with renal impairment."
    },

    "Nitrofurantoin": {
        class: "Nitrofuran Antibiotic",
        brandNames: "Macrobid, Macrodantin, Furadantin",
        administration: "Oral",
        halfLife: "20 minutes",
        uses: "Nitrofurantoin is used to treat and prevent urinary tract infections caused by susceptible strains of bacteria.",
        dosage: "Treatment: 50-100 mg four times daily. Prophylaxis: 50-100 mg at bedtime.",
        sideEffects: [
            "Nausea",
            "Headache",
            "Dizziness",
            "Pulmonary reactions",
            "Peripheral neuropathy"
        ],
        interactions: [
            { drug: "Antacids", level: "medium", description: "Reduced absorption" },
            { drug: "Probenecid", level: "medium", description: "Reduced effectiveness" },
            { drug: "Uricosuric agents", level: "medium", description: "Reduced effectiveness" }
        ],
        safety: "Contraindicated in renal impairment (CrCl <60 mL/min). Risk of pulmonary fibrosis and peripheral neuropathy with long-term use. Monitor for signs of hepatotoxicity."
    }

};

// DOM elements
const drugTags = document.querySelectorAll('.drug-tag');
const modalOverlay = document.getElementById('drugModal');
const closeModalBtn = document.getElementById('closeModal');
const modalDrugName = document.getElementById('modalDrugName');

// Event listeners for drug tags
drugTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const drugName = tag.getAttribute('data-drug');
        showDrugInfo(drugName);
    });
});

// Close modal events
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Function to show drug information
function showDrugInfo(drugName) {
    const drug = drugDatabase[drugName];
    
    if (!drug) {
        // For drugs not in our detailed database, show a generic message
        modalDrugName.textContent = drugName;
        document.getElementById('drugClass').textContent = "Information not available";
        document.getElementById('brandNames').textContent = "N/A";
        document.getElementById('administration').textContent = "N/A";
        document.getElementById('halfLife').textContent = "N/A";
        document.getElementById('drugUses').textContent = "Detailed information for this medication is not currently available in our database.";
        document.getElementById('dosageInfo').textContent = "Please consult your healthcare provider or pharmacist for dosage information.";
        document.getElementById('safetyInfo').textContent = "Always follow your healthcare provider's instructions and read the medication guide provided with your prescription.";

        // Clear lists
        document.getElementById('sideEffects').innerHTML = '<li>Information not available</li>';
        document.getElementById('drugInteractions').innerHTML = '<li>Information not available</li>';
    } else {
        // Set basic drug information
        modalDrugName.textContent = drugName;
        document.getElementById('drugClass').textContent = drug.class;
        document.getElementById('brandNames').textContent = drug.brandNames;
        document.getElementById('administration').textContent = drug.administration;
        document.getElementById('halfLife').textContent = drug.halfLife;
        document.getElementById('drugUses').textContent = drug.uses;
        document.getElementById('dosageInfo').textContent = drug.dosage;
        document.getElementById('safetyInfo').textContent = drug.safety;

        // Populate side effects
        const sideEffectsList = document.getElementById('sideEffects');
        sideEffectsList.innerHTML = '';
        drug.sideEffects.forEach(effect => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-chevron-right" style="color: #0066cc; margin-right: 10px;"></i> ${effect}`;
            sideEffectsList.appendChild(li);
        });

        // Populate drug interactions
        const interactionsList = document.getElementById('drugInteractions');
        interactionsList.innerHTML = '';
        drug.interactions.forEach(interaction => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div style="display: flex; justify-content: space-between; width: 100%;">
                    <span><strong>${interaction.drug}</strong> - ${interaction.description}</span>
                    <span class="interaction-level level-${interaction.level}">${interaction.level.toUpperCase()}</span>
                </div>
            `;
            interactionsList.appendChild(li);
        });
    }

    // Show the modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Function to close the modal
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Search functionality
const searchInput = document.getElementById('drugSearch');
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const allDrugTags = document.querySelectorAll('.drug-tag');
    let visibleCount = 0;
    
    allDrugTags.forEach(tag => {
        const drugName = tag.getAttribute('data-drug').toLowerCase();
        if (drugName.includes(searchTerm)) {
            tag.style.display = 'inline-block';
            visibleCount++;
        } else {
            tag.style.display = 'none';
        }
    });
    
    // Show/hide category sections based on visible drugs
    const categorySections = document.querySelectorAll('.drug-category-section');
    categorySections.forEach(section => {
        const tagsInSection = section.querySelectorAll('.drug-tag');
        const visibleTags = Array.from(tagsInSection).filter(tag => 
            tag.style.display !== 'none'
        );
        
        if (visibleTags.length === 0) {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// Add hover effect to category cards
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Improved smooth scroll with offset
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const yOffset = -140; // 🔹 فاصله‌ی دلخواه از بالا (مثلاً ارتفاع هدر)
            const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to Top Button Logic
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



