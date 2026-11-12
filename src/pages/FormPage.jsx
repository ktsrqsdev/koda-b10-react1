import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { saveData } from "../storage";

let schema = yup.object({
    nama: yup.string().required("Nama wajib diisi"),

    umur: yup
        .number()
        .transform((value, originalValue) => (originalValue === "" ? undefined : value))
        .typeError("Umur harus berupa angka")
        .required("Umur wajib diisi")
        .min(1, "Umur minimal 1 tahun")
        .max(120, "Umur maksimal 120 tahun"),

    kelamin: yup.string().required("Pilih jenis kelamin"),

    perokok: yup.string().required("Pilih salah satu jawaban"),

    rokok: yup
        .array()
        .of(yup.string())
        .when("perokok", {
            is: "Ya",
            then: schema => schema.min(1, "Pilih minimal satu jenis rokok"),
            otherwise: schema => schema.notRequired(),
        }),
});

function FormPage() {
    const navigate = useNavigate();

    const [perokok, setPerokok] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            nama: "",
            umur: "",
            kelamin: "",
            perokok: "",
            rokok: [],
        },
    });

    function onSubmit(data) {
        const newData = {
            ...data,
            rokok: data.perokok === "Ya" ? data.rokok : [],
        };

        saveData(newData);

        alert("Data berhasil disimpan!");

        reset();
        setPerokok("");
        navigate("/data");
    }

    return (
        <main className="min-h-screen bg-gray-100 px-4 py-10">
            <div className="mx-auto max-w-2xl">
                <div className="mb-6 rounded-xl border-t-8 border-blue-600 bg-white p-6 shadow-sm">
                    <h1 className="text-2xl font-bold text-gray-800 pb-10">Form Pendataan Perokok</h1>

                    <p className="mt-2 text-sm text-gray-500">Silakan isi formulir berikut dengan benar.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <label className="mb-3 block font-medium text-gray-800">Nama Lengkap</label>

                        <input
                            type="text"
                            placeholder="Masukkan nama lengkap"
                            {...register("nama")}
                            className="w-full border-b border-gray-300 py-2 outline-none focus:border-blue-600"
                        />

                        <p className="mt-2 text-sm text-red-500">{errors.nama?.message}</p>
                    </div>

                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <label className="mb-3 block font-medium text-gray-800">Umur</label>

                        <input
                            type="number"
                            placeholder="Masukkan umur"
                            {...register("umur")}
                            className="w-full border-b border-gray-300 py-2 outline-none focus:border-blue-600"
                        />

                        <p className="mt-2 text-sm text-red-500">{errors.umur?.message}</p>
                    </div>

                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <p className="mb-4 font-medium text-gray-800">Jenis Kelamin</p>

                        <div className="space-y-3">
                            {["Laki-Laki", "Perempuan"].map(item => (
                                <label key={item} className="flex items-center gap-3 text-gray-700">
                                    <input
                                        type="radio"
                                        value={item}
                                        {...register("kelamin")}
                                        className="accent-blue-600"
                                    />

                                    {item}
                                </label>
                            ))}
                        </div>

                        <p className="mt-2 text-sm text-red-500">{errors.kelamin?.message}</p>
                    </div>

                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <p className="mb-4 font-medium text-gray-800">Apakah Anda Merokok?</p>

                        <div className="space-y-3">
                            {["Ya", "Tidak"].map(item => (
                                <label key={item} className="flex items-center gap-3 text-gray-700">
                                    <input
                                        type="radio"
                                        value={item}
                                        {...register("perokok")}
                                        onChange={() => setPerokok(item)}
                                        className="accent-blue-600"
                                    />

                                    {item}
                                </label>
                            ))}
                        </div>

                        <p className="mt-2 text-sm text-red-500">{errors.perokok?.message}</p>
                    </div>

                    {perokok === "Ya" && (
                        <div className="rounded-xl bg-white p-6 shadow-sm">
                            <p className="mb-4 font-medium text-gray-800">Jenis Rokok yang Digunakan</p>

                            <div className="space-y-3">
                                {["Gudang Garam Filter", "Lucky Strike", "Marlboro", "Esse"].map(item => (
                                    <label key={item} className="flex items-center gap-3 text-gray-700">
                                        <input
                                            type="checkbox"
                                            value={item}
                                            {...register("rokok")}
                                            className="accent-blue-600"
                                        />

                                        {item}
                                    </label>
                                ))}
                            </div>

                            <p className="mt-2 text-sm text-red-500">{errors.rokok?.message}</p>
                        </div>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-3 py-2">
                        <button
                            type="button"
                            onClick={() => {
                                reset();
                                setPerokok("");
                            }}
                            className="rounded-lg px-5 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50"
                        >
                            Reset
                        </button>

                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={() => navigate("/data")}
                                className="rounded-lg border border-blue-600 px-5 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50"
                            >
                                Lihat Data
                            </button>

                            <button
                                type="submit"
                                className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
                            >
                                Kirim
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default FormPage;
