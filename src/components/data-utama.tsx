import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IDataUtama, getDataUtama } from "@/utils/apis/utama";

import { Form } from "@/components/ui/form";
import {
  CustomFormField,
  CustomFormSelect,
} from "@/components/ui/custom-formfield";
import { Input } from "@/components/ui/input";

import {
  pabean,
  jenis_pib,
  jenis_impor,
  cara_pembayaran,
  transaksi,
} from "@/utils/constant";

const FormSchema = z.object({
  nomor_pengajuan: z.string(),
  tanggal_pengajuan: z.string(),
  nomor_pendaftaran: z.string().optional(),
  tanggal_pendaftaran: z.string().optional(),
  ur_pabean_asal: z.string(),
  skep_fasilitas: z.string(),
  ur_jenis_pib: z.string(),
  ur_jenis_impor: z.string(),
  ur_cara_bayar: z.string(),
  ur_transaksi_impor: z.string(),
});

const DataUtama = () => {
  const [params] = useState({
    nomor_pengajuan: "20120B388FAE20240402000001",
  });
  const [dataUtama, setDataUtama] = useState<IDataUtama[]>([]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nomor_pengajuan: "",
      tanggal_pengajuan: "",
      nomor_pendaftaran: "",
      tanggal_pendaftaran: "",
      ur_pabean_asal: "",
      skep_fasilitas: "",
      ur_jenis_pib: "",
      ur_jenis_impor: "",
      ur_cara_bayar: "",
      ur_transaksi_impor: "",
    },
  });

  useEffect(() => {
    fetchData();
  }, [params]);

  useEffect(() => {
    if (dataUtama) {
      form.reset({
        nomor_pengajuan: dataUtama.nomor_pengajuan || "",
        tanggal_pengajuan: dataUtama.tanggal_pengajuan || "",
        nomor_pendaftaran: dataUtama.nomor_pendaftaran || "Nomor Pendaftaran",
        tanggal_pendaftaran:
          dataUtama.tanggal_pendaftaran || "Tanggal Pendaftaran",
        ur_pabean_asal: dataUtama.ur_pabean_asal || "",
        skep_fasilitas: dataUtama.skep_fasilitas || "",
        ur_jenis_pib: dataUtama.ur_jenis_pib || "",
        ur_jenis_impor: dataUtama.ur_jenis_impor || "",
        ur_cara_bayar: dataUtama.ur_cara_bayar || "",
        ur_transaksi_impor: dataUtama.ur_transaksi_impor || "",
      });
    }
  }, [dataUtama]);

  async function fetchData() {
    const query: { [key: string]: string } = {};
    for (const [key, value] of Object.entries(params)) {
      query[key] = value;
    }
    try {
      const result = await getDataUtama(query);

      setDataUtama(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form className="w-full space-y-6">
          <div className="grid grid-cols-4 gap-4">
            <CustomFormField
              control={form.control}
              name="nomor_pengajuan"
              label="Nomor Pengajuan"
            >
              {(field) => (
                <Input
                  {...field}
                  value={field.value as string}
                  readOnly
                  disabled
                />
              )}
            </CustomFormField>
            <CustomFormField
              control={form.control}
              name="tanggal_pengajuan"
              label="Tanggal Pengajuan"
            >
              {(field) => (
                <Input
                  {...field}
                  value={field.value as string}
                  readOnly
                  disabled
                />
              )}
            </CustomFormField>
            <CustomFormField
              control={form.control}
              placeholder="Nomor Pendaftaran"
              name="nomor_pendaftaran"
              label="Nomor Pendaftaran"
            >
              {(field) => (
                <Input
                  {...field}
                  value={field.value as string}
                  readOnly
                  disabled
                />
              )}
            </CustomFormField>
            <CustomFormField
              control={form.control}
              placeholder="Tanggal Pendaftaran"
              name="tanggal_pendaftaran"
              label="Tanggal Pendaftaran"
            >
              {(field) => (
                <Input
                  {...field}
                  value={field.value as string}
                  readOnly
                  disabled
                />
              )}
            </CustomFormField>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <CustomFormSelect
              control={form.control}
              name="ur_pabean_asal"
              label="Kantor Pabean"
              options={pabean}
            />
            <CustomFormSelect
              control={form.control}
              name="kd_skep_fasilitas"
              label="SKEP Fasilitas"
              disabled={true}
            />
            <CustomFormSelect
              control={form.control}
              name="ur_jenis_pib"
              label="Jenis PIB"
              options={jenis_pib}
              disabled={true}
              isRequired={true}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <CustomFormSelect
              control={form.control}
              name="ur_jenis_impor"
              label="Jenis Impor"
              options={jenis_impor}
              disabled={true}
              isRequired={true}
            />
            <CustomFormSelect
              control={form.control}
              name="ur_cara_bayar"
              label="Cara Pembayaran"
              options={cara_pembayaran}
              disabled={true}
              isRequired={true}
            />
            <CustomFormSelect
              control={form.control}
              name="ur_transaksi_impor"
              label="Transaksi"
              options={transaksi}
              disabled={true}
              isRequired={true}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DataUtama;
