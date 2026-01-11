
import React from 'react';
import { VERBS } from '../constants';

interface VerbTableProps {
  verbBases: string[];
}

const VerbTable: React.FC<VerbTableProps> = ({ verbBases }) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-amber-500/30 bg-indigo-900/50 backdrop-blur-sm max-h-[600px] overflow-y-auto">
      <table className="w-full text-left text-sm md:text-base border-collapse">
        <thead className="text-amber-400 font-cinzel bg-indigo-950 sticky top-0 z-10 shadow-md">
          <tr className="border-b border-amber-500/30">
            <th className="p-4 whitespace-nowrap">V1 (Base)</th>
            <th className="p-4 whitespace-nowrap">V2 (Past)</th>
            <th className="p-4 whitespace-nowrap">V3 (Participle)</th>
            <th className="p-4 whitespace-nowrap">(-s) Form</th>
            <th className="p-4 whitespace-nowrap">(-ing) Form</th>
            <th className="p-4">Meaning</th>
          </tr>
        </thead>
        <tbody className="text-gray-100">
          {verbBases.map((base) => {
            const verb = VERBS[base];
            if (!verb) return null;
            return (
              <tr key={base} className="border-b border-white/5 hover:bg-white/10 transition-colors group">
                <td className="p-4 font-bold text-amber-300">{verb.base}</td>
                <td className="p-4">{verb.v2}</td>
                <td className="p-4">{verb.v3}</td>
                <td className="p-4 italic text-indigo-200">{verb.s}</td>
                <td className="p-4 italic text-indigo-200">{verb.ing}</td>
                <td className="p-4 text-sm text-slate-300 leading-relaxed min-w-[200px]">{verb.meaning}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VerbTable;
