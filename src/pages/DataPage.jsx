import { useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "../storage";

export default function DataPage() {
    const [data] = useState(() => getData());
    return (
        <main className="min-h-screen bg-gray-100 px-4 py-10">
            <div className="mx-auto max-w-6xl">
                <div className="overflow-auto rounded-xl bg-white p-6 shadow-sm">
                    <table className=" w-full border-collapse text-left text-sm">
                        <thead>
                            <tr className="border-b-2 border-b-gray-300 bg-gray-50 text-gray-700 text-center">
                                <th className="p-3">No.</th>
                                <th className="p-3">Nama</th>
                                <th className="p-3">Umur</th>
                                <th className="p-3">Kelamin</th>
                                <th className="p-3">Perokok</th>
                                <th className="p-3">Jenis Rokok</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((item, index) => (
                                    <tr key={item.id} className="border-b-2 border-b-gray-300 text-gray-600">
                                        <td className="p-3">{index + 1}</td>
                                        <td className="p-3">{item.nama}</td>
                                        <td className="p-3">{item.umur}</td>
                                        <td className="p-3">{item.kelamin}</td>
                                        <td className="p-3">{item.perokok}</td>
                                        <td className="p-3">{item.rokok?.length > 0 ? item.rokok.join(", ") : "-"}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="p-6 text-center text-gray-500">
                                        Belum ada data!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="mt-5 flex items-center justify-end">
                    <Link
                        to="/"
                        className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                        Kembali
                    </Link>
                </div>
            </div>
        </main>
    );
}
