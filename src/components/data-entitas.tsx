"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IEntitas, getDataEntitas } from "@/utils/apis/entitas";

import { Form } from "@/components/ui/form";
import {
  CustomFormField,
  CustomFormSelect,
} from "@/components/ui/custom-formfield";
import { Input } from "@/components/ui/input";

import {
  entitas_pemberitahu,
  provinsi_identitas,
  status_entitas,
} from "@/utils/constant";

const FormSchema = z.object({
  ur_entitas_pemberitahu: z.string(),
  ur_jenis_identitas: z.string().optional(),
  nib: z.string(),
  nomor_identitas: z.string(),
  nomor_identitas_16: z.string().optional(),
  nama_identitas: z.string(),
  provinsi_identitas: z.string(),
  kota_identitas: z.string(),
  kecamatan: z.string(),
  kode_pos: z.string(),
  rt_rw: z.string(),
  tlp_identitas: z.string(),
  email_identitas: z.string(),
  status: z.string(),
});

import { Search } from "lucide-react";

const DataEntitas = () => {
  const [params] = useState({
    id_aju: "04eb6a72-bb63-5aed-5e92-f58a3bfd5da2",
  });

  const [loading, setLoading] = useState([]);

  const [dataEntitas, setDataEntitas] = useState<IEntitas>();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      ur_entitas_pemberitahu: "",
      ur_jenis_identitas: "",
      nib: "",
      nomor_identitas: "",
      nomor_identitas_16: "",
      nama_identitas: "",
      provinsi_identitas: "",
      kota_identitas: "",
      kecamatan: "",
      kode_pos: "",
      rt_rw: "",
      tlp_identitas: "",
      email_identitas: "",
      status: "",
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!loading && dataEntitas) {
      form.reset({
        ur_entitas_pemberitahu: dataEntitas.ur_entitas_pemberitahu || "",
        ur_jenis_identitas: dataEntitas.pengusaha.ur_jenis_kegiatan || "",
        nib: dataEntitas.pengusaha.nib || "",
        nomor_identitas: dataEntitas.pengusaha.nomor_identitas || "",
        nomor_identitas_16: dataEntitas.pengusaha.nomor_identitas_16 || "",
        nama_identitas: dataEntitas.pengusaha.nama_identitas || "",
        provinsi_identitas: dataEntitas.pengusaha.provinsi_identitas || "",
        kota_identitas: dataEntitas.pengusaha.kota_identitas || "",
        kecamatan: dataEntitas.pengusaha.kecamatan || "",
        kode_pos: dataEntitas.pengusaha.kode_pos || "",
        rt_rw: dataEntitas.pengusaha.rt_rw || "",
        tlp_identitas: dataEntitas.pengusaha.tlp_identitas || "",
        email_identitas: dataEntitas.pengusaha.email_identitas || "",
        status: dataEntitas.pengusaha.status || "",
      });
    }
  }, [loading, dataEntitas]);

  async function fetchData() {
    setLoading(true);
    const query: { [key: string]: string } = {};
    for (const [key, value] of Object.entries(params)) {
      query[key] = value;
    }
    try {
      const result = await getDataEntitas(query);
      setDataEntitas(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="text-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form className="w-full space-y-6">
        <div className="grid grid-cols-4 gap-4">
          <CustomFormSelect
            control={form.control}
            name="ur_entitas_pemberitahu"
            label="Jenis Pemberitahu"
            options={entitas_pemberitahu}
            disabled={true}
            isRequired={true}
          />
        </div>
        <hr />
        <div>
          <p className="text-xl">Pengusaha</p>
          <hr className="w-8 border-t-4 border-blue-400 my-2" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <CustomFormSelect
            control={form.control}
            name="ur_jenis_identitas"
            label="Jenis Identitas"
            disabled={true}
            isRequired={true}
          />
          <CustomFormField
            control={form.control}
            name="nib"
            label="NIB"
            isRequired={true}
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="nomor_identitas"
            label="No Idedntitas"
            isRequired={true}
          >
            {(field) => (
              <div className="flex">
                <Input
                  {...field}
                  value={field.value as string}
                  readOnly
                  disabled
                  className="pr-10"
                />
                <button
                  type="button"
                  className="inset-y-0 right-0 flex items-center px-3 text-white bg-blue-500 hover:text-blue-700 rounded-r-md"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            )}
          </CustomFormField>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <CustomFormField
            control={form.control}
            name="nomor_identitas_16"
            label="No Identitas(16 digit)"
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="nama_identitas"
            label="Nama Perusahaan"
            isRequired={true}
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <CustomFormSelect
            control={form.control}
            name="provinsi_identitas"
            label="Provinsi"
            options={provinsi_identitas}
            disabled={true}
            isRequired={true}
          />
          <CustomFormField
            control={form.control}
            name="kota_identitas"
            label="Kota / Kabupaten"
            isRequired={true}
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="kecamatan"
            label="Kecamatan"
            isRequired={true}
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="kode_pos"
            label="Kode Pos"
            isRequired={true}
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="rt_rw"
            label="RT / RW"
            isRequired={true}
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <CustomFormField
            control={form.control}
            name="tlp_identitas"
            label="Telepon"
            isRequired={true}
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="email_identitas"
            label="Email"
            isRequired={true}
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
          <CustomFormSelect
            control={form.control}
            name="status"
            label="Status"
            options={status_entitas}
            disabled={true}
            isRequired={true}
          />
        </div>
      </form>
    </Form>
  );
};

export default DataEntitas;
