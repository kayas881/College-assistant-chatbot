import React, { useState } from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import "./../styles/table.module.css"
interface FormState {
    txtname: string;
    txtSemester: string;
    txtBranch: string;
    txtSeat: string;
    [key: string]: string | number; // index signature
}
interface Results {
    total: number;
    percentage: number;
    cgpa: number;
}
interface Grade {
    code: string; // Add the code property here
    subject: string;
    u1: number;
    u2: number;
    final: number;
    total: number;
    grade: string;
}
const GradeCalculator = () => {
    const [form, setForm] = useState<FormState>({
        txtname: '',
        txtSemester: '',
        txtBranch: '',
        txtSeat: '',
        ebu1: 0,
        ebu2: 0,
        ebfinal: 0,
        ebPractical: 0,
        ebTermWork: 0,
        ipu1: 0,
        ipu2: 0,
        ipfinal: 0,
        ipPractical: 0,
        ipTermWork: 0,
        seu1: 0,
        seu2: 0,
        sefinal: 0,
        sePractical: 0,
        seTermWork: 0,
        mtu1: 0,
        mtu2: 0,
        mtfinal: 0,
        mtPractical: 0,
        mtTermWork: 0,
        cnsu1: 0,
        cnsu2: 0,
        cnsfinal: 0,
        cnsPractical: 0,
        cnsTermWork: 0,
        scilabu1: 0, // New subject for Scilab
        scilabu2: 0, // New subject for Scilab
        scilabfinal: 0, // New subject for Scilab
        scilabPractical: 0, // New subject for Scilab
        scilabTermWork: 0, // New subject for Scilab
        projectu1: 0, // New subject for Project
        projectu2: 0, // New subject for Project
        projectfinal: 0, // New subject for Project
        projectPractical: 0, // New subject for Project
        projectTermWork: 0, // New subject for Project
        twritingu1: 0, // New subject for TW Writing
        twritingu2: 0, // New subject for TW Writing
        twritingfinal: 0, // New subject for TW Writing
        twritingPractical: 0, // New subject for TW Writing
        twritingTermWork: 0, // New subject for TW Writing

    });
    const [grades, setGrades] = useState<{ [key: string]: Grade }>({});


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const [results, setResults] = useState<Results | null>(null);
    const [showResults, setShowResults] = useState(false);
    const calculateGrade = (total: number) => {
        if (total >= 140) return "O";
        else if (total >= 122.5) return "A";
        else if (total >= 105) return "B";
        else if (total >= 87.5) return "C";
        else if (total >= 70) return "D";
        else return "-";
    }

    const calculateOverallGrade = (percentage: number) => {
        return percentage >= 40 ? "Pass" : "Fail";
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        let subjects = [
            { key: "eb",  code: "ET-18612", title: "Digital Signal Processing" },
            { key: "ip",code: "ET-18613", title: "Data Communication and networking" },
            {key: "se",code: "ET-18614", title: "Digital Communication" },
            {key: "mt", code: "ET-18612", title: "Advance Power Electronics" },
            { key: "cns",code: "ET-18620", title: "Industrial Management and Quality Control" },
            {key: "project", code: "ET-18616", title: "Project" },
            {key: "scilab", code: "ET-18618", title: "Scilab" },
            {key: "twriting", code: "ET-18621", title: "Technical Writing" }
          ];


          let total = 0;

          subjects.forEach(subject => {
              let u1Value = parseFloat(form[subject.key + "u1"].toString());
              let u2Value = parseFloat(form[subject.key + "u2"].toString());
              let finalValue = parseFloat(form[subject.key + "final"].toString());
              let practicalValue = parseFloat(form[subject.key + "Practical"].toString());
              let termWorkValue = parseFloat(form[subject.key + "TermWork"].toString());
              
              let uTotal = (u1Value + u2Value) / 2;
              let totalScore = uTotal + finalValue + practicalValue + termWorkValue;
              
              total += totalScore; // Update the total here
              
              let grade = calculateGrade(totalScore);
              
              setGrades(prevGrades => ({
                  ...prevGrades,
                  [subject.key]: {
                      code: subject.code, // Add the subject code here
                      subject: subject.title,
                      u1: u1Value,
                      u2: u2Value,
                      final: finalValue,
                      total: totalScore,
                      grade
                  }
              }));
          });
          
          // Now that the total marks have been calculated, proceed with other calculations
          let percentage = (total / 1000) * 100;
          let cgpa = percentage / 9.5;
        // Set the results state
        setResults({
            total,
            percentage,
            cgpa,
        });
    
        // Show the results
        setShowResults(true);
    };
    return (
        <div className=' bg-black min-h-[100vh] overflow-y-hidden'>
            <h1>Grade Calculator</h1>
            <form onSubmit={handleSubmit} className='mx-20 mt-6'>
                {/* Input fields for student information */}
             <div className='flex justify-between mt-5'>
             <div className=''>
                    <label className=' text-white font-extrabold text-2xl'>Name:</label>
                    <input
                    className='ml-5 w-[300px] border-2 border-black rounded-md p-2 font-semibold'
                        type="text"
                        name="txtname"
                        value={form.txtname}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='text-white font-extrabold text-2xl'>Semester:</label>
                    <input
                    className='ml-5 w-[200px] border-2 border-black rounded-md p-2 font-semibold'
                        type="text"
                        name="txtSemester"
                        value={form.txtSemester}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='text-white font-extrabold text-2xl'>Branch:</label>
                    <input
                    className='ml-5 w-[250px] border-2 border-black rounded-md p-2 font-semibold'
                        type="text"
                        name="txtBranch"
                        value={form.txtBranch}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='text-white font-extrabold text-2xl'>EnrollMent No.:</label>
                    <input
                    className='ml-5 w-[180px] border-2 border-black rounded-md p-2 font-semibold'
                        type="text"
                        name="txtSeat"
                        value={form.txtSeat}
                        onChange={handleChange}
                    />
                </div>
             </div>

                {/* Input fields for subject scores */}
                <table  border={2}  cellSpacing={0} className="markinput mt-10" style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid white' }}>
    <thead>
        <tr>
            <th className='text-[26px] text-[#00df9a]' style={{ border: '1px solid white' }}>Course-Code</th>
            <th className='text-[26px] text-[#00df9a] ' style={{ border: '1px solid white', width: "400px" }}>Course-Title</th>
            <th className='text-[26px] text-[#00df9a] ' style={{ border: '1px solid white' }}>UT-I(20)</th>
            <th className='text-[26px] text-[#00df9a] ' style={{ border: '1px solid white' }}>UT-II(20)</th>
            <th className='text-[26px] text-[#00df9a] ' style={{ border: '1px solid white' }}>Marks(80)</th>
            <th className='text-[26px] text-[#00df9a] ' style={{ border: '1px solid white' }}>Practical(50)</th>
            <th className='text-[26px] text-[#00df9a] ' style={{ border: '1px solid white' }}>TermWork(25)</th>
        </tr>
    </thead>
    <tbody className='text-white ml-4'>
        {[
            { code: "ET-18612", title: "Digital Signal Processing", key: "eb" },
            { code: "ET-18613", title: "Data Communication and networking", key: "ip" },
            { code: "ET-18614", title: "Digital Communication", key: "se" },
            { code: "ET-18612", title: "Advance Power Electronics", key: "mt" },
            { code: "ET-18620", title: "Industrial Management and Quality Control", key: "cns" },
            { code: "ET-18616", title: "Project", key: "project" },
            { code: "ET-18618", title: "Scilab", key: "scilab" },
            { code: "ET-18621", title: "Technical Writing", key: "twriting" }
        ].map((subject, index) => (
            <tr key={index}>
                <td style={{ border: '1px solid white' }}><b>{subject.code}</b></td>
                <td style={{ border: '1px solid white' }}><b>{subject.title}</b></td>
                <td style={{ border: '1px solid white'}}><input className='text-black font-bold' type="text" name={`${subject.key}u1`} maxLength={2} size={10} style={{ width: `${10 * 8}px`, padding: '5px' }} value={form[`${subject.key}u1`]} onChange={handleChange} /></td>
                <td style={{ border: '1px solid white' }}><input className='text-black font-bold' type="text" name={`${subject.key}u2`} maxLength={2} size={10} style={{ width: `${10 * 8}px`, padding: '5px' }} value={form[`${subject.key}u2`]} onChange={handleChange} /></td>
                <td style={{ border: '1px solid white' }}><input className='text-black font-bold' type="text" name={`${subject.key}final`} maxLength={2} size={10} style={{ width: `${10 * 8}px`, padding: '5px' }} value={form[`${subject.key}final`]} onChange={handleChange} /></td>
                <td style={{ border: '1px solid white' }}><input className='text-black font-bold' type="text" name={`${subject.key}Practical`} maxLength={2} size={10} style={{ width: `${10 * 8}px`, padding: '5px' }} value={form[`${subject.key}Practical`]} onChange={handleChange} /></td>
                <td style={{ border: '1px solid white' }}><input className='text-black font-bold' type="text" name={`${subject.key}TermWork`} maxLength={2} size={10} style={{ width: `${10 * 8}px`, padding: '5px' }} value={form[`${subject.key}TermWork`]} onChange={handleChange} /></td>
            </tr>
        ))}
    </tbody>
</table>


                {/* Button to calculate grades */}
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Calculate Grade</button>
            </form>

            {showResults && results && (
                <div className=' mx-20 '>
                <h2>Results</h2>
                <table className='main-table' cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid white' }}>
    <thead>
        <tr>
            <th className='text-[#00df9a] font-bold md:text-2xl'  colSpan={7} id="studentinfo"><strong>Student Information</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className='text-[#00df9a] md:text-[24px]' style={{ border: '1px solid white' }}><strong>Name</strong></td>
            <td className='text-white md:text-[24px] md:px-5'  colSpan={6} style={{ border: '1px solid white' }}>{form.txtname}</td>
        </tr>
        <tr>
            <td className='text-[#00df9a] md:text-[24px]' style={{ border: '1px solid white' }}><strong>Semester</strong></td>
            <td className='text-white md:text-[24px] md:px-5' colSpan={6} style={{ border: '1px solid white' }}>{form.txtSemester}</td>
        </tr>
        <tr>
            <td className='text-[#00df9a] md:text-[24px]'  style={{ border: '1px solid white' }}><strong>Branch</strong></td>
            <td className='text-white md:text-[24px] md:px-5' colSpan={6} style={{ border: '1px solid white' }}>{form.txtBranch}</td>
        </tr>
        <tr>
            <td className='text-[#00df9a] md:text-[24px]'  style={{ border: '1px solid white' }}><strong>Seatnumber</strong></td>
            <td className='text-white md:text-[24px] md:px-5' colSpan={6} style={{ border: '1px solid white' }}>{form.txtSeat}</td>
        </tr>
        <tr>
            <th className='text-[#00df9a] md:text-[20px]' style={{ border: '1px solid white' }}>Subject Code</th>
            <th className='text-[#00df9a] md:text-[20px]' style={{ border: '1px solid white' }}>Subject</th>
            <th className='text-[#00df9a] md:text-[20px]' style={{ border: '1px solid white' }}>Unit 1</th>
            <th className='text-[#00df9a] md:text-[20px]' style={{ border: '1px solid white' }}>Unit 2</th>
            <th className='text-[#00df9a] md:text-[20px]' style={{ border: '1px solid white' }}>Final</th>
            <th className='text-[#00df9a] md:text-[20px]' style={{ border: '1px solid white' }}>Total</th>
            <th  className='text-[#00df9a] md:text-[20px]'style={{ border: '1px solid white' }}>Grade</th>
        </tr>
        {Object.entries(grades).map(([subject, grade]) => (
    <tr key={subject}>
        <td className='text-white font-bold' style={{ border: '1px solid white' }}>{grade.code}</td>
        <td className='text-white font-bold' style={{ border: '1px solid white' }}>{grade.subject}</td>
        <td className='text-white font-bold' style={{ border: '1px solid white' }}>{grade.u1}</td>
        <td className='text-white font-bold' style={{ border: '1px solid white' }}>{grade.u2}</td>
        <td className='text-white font-bold' style={{ border: '1px solid white' }}>{grade.final}</td>
        <td className='text-white font-bold' style={{ border: '1px solid white' }}>{grade.total}</td>
        <td className='text-white font-bold' style={{ border: '1px solid white' }}>{grade.grade}</td>
    </tr>
))}


        <tr>
            <th className='text-[#00df9a] md:text-[20px]' colSpan={7} id="subtotal" style={{ border: '1px solid white' }}><strong>Marks Total</strong></th>
        </tr>
        <tr>
            <td className='text-white font-bold' style={{ border: '1px solid white' }}><strong>Total(500)</strong></td>
            <td className='text-white font-bold'  colSpan={6} style={{ border: '1px solid white' }}>{results.total}</td>
        </tr>
        <tr>
            <td className='text-white font-bold' style={{ border: '1px solid white' }}><strong>Percentage</strong></td>
            <td className='text-white font-bold' colSpan={6} style={{ border: '1px solid white' }}>{results.percentage}</td>
        </tr>
        <tr>
            <td className='text-white font-bold' style={{ border: '1px solid white' }}><strong>CGPA</strong></td>
            <td className='text-white font-bold' colSpan={6} style={{ border: '1px solid white' }}>{results.cgpa}</td>
        </tr>
        <tr>
            <td className='text-white font-bold' style={{ border: '1px solid white' }}><strong>Result</strong></td>
            <td className='text-white font-bold' colSpan={6} style={{ border: '1px solid white' }}>{calculateOverallGrade(results.percentage)}</td>
        </tr>
    </tbody>
</table>

            </div>
            )}
        </div>

    );


};

export default GradeCalculator;