import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IPungutan, getDataPungutan } from "@/utils/apis/pungutan";

import { Form } from "@/components/ui/form";
import {
  CustomFormField,
  CustomFormSelect,
} from "@/components/ui/custom-formfield";
import { Input } from "@/components/ui/input";

import {
  opt_asuransi,
  opt_incoterms,
  opt_valuta,
  opt_kontainer,
} from "@/utils/constant";

import { Button } from "@/components/ui/button";

import { RefreshCcw } from "lucide-react";

const FormSchema = z.object({
  ur_incoterm: z.string(),
  ur_valuta: z.string(),
  nilai_kurs: z.string(),
  nilai_incoterm: z.string(),
  biaya_tambahan: z.string(),
  biaya_pengurang: z.string(),
  tarif_vd: z.string(),
  fob: z.string(),
  ur_asuransi: z.string(),
  nilai_asuransi: z.string(),
  freight: z.string(),
  nilai_pabean: z.string(),
  nilai_pabean_idr: z.string(),
  berat_kotor: z.string(),
  berat_bersih: z.string(),
  ur_flag_curah: z.string(),
});

const DataPungutan = () => {
  const [params] = useState({
    id_aju: "04eb6a72-bb63-5aed-5e92-f58a3bfd5da2",
  });

  const [loading, setLoading] = useState(true);

  const [dataPungutan, setDataPungutan] = useState<IPungutan>();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      ur_incoterm: "",
      ur_valuta: "",
      nilai_kurs: "",
      nilai_incoterm: "",
      biaya_tambahan: "",
      biaya_pengurang: "",
      tarif_vd: "",
      fob: "",
      ur_asuransi: "",
      nilai_asuransi: "",
      freight: "",
      nilai_pabean: "",
      nilai_pabean_idr: "",
      berat_kotor: "",
      berat_bersih: "",
      ur_flag_curah: "",
    },
  });

  const formatCurrency = (value: string): string => {
    const numberValue = parseFloat(value);
    if (isNaN(numberValue)) return value;

    return new Intl.NumberFormat("id-ID", {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    }).format(numberValue);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!loading && dataPungutan) {
      form.reset({
        ur_incoterm: dataPungutan.ur_incoterm || "",
        ur_valuta: dataPungutan.ur_valuta || "",
        nilai_kurs: formatCurrency(dataPungutan.nilai_kurs?.toString() || ""),
        nilai_incoterm: formatCurrency(
          dataPungutan.nilai_incoterm?.toString() || ""
        ),
        biaya_tambahan: formatCurrency(
          dataPungutan.biaya_tambahan?.toString() || ""
        ),
        biaya_pengurang: formatCurrency(
          dataPungutan.biaya_pengurang?.toString() || ""
        ),
        tarif_vd: formatCurrency(dataPungutan.tarif_vd?.toString() || ""),
        fob: formatCurrency(dataPungutan.fob?.toString() || ""),
        ur_asuransi: dataPungutan.ur_asuransi || "",
        nilai_asuransi: formatCurrency(
          dataPungutan.nilai_asuransi?.toString() || ""
        ),
        freight: formatCurrency(dataPungutan.freight?.toString() || ""),
        nilai_pabean: formatCurrency(
          dataPungutan.nilai_pabean?.toString() || ""
        ),
        nilai_pabean_idr: formatCurrency(
          dataPungutan.nilai_pabean_idr?.toString() || ""
        ),
        berat_kotor: formatCurrency(dataPungutan.berat_kotor?.toString() || ""),
        berat_bersih: formatCurrency(
          dataPungutan.berat_bersih?.toString() || ""
        ),
        ur_flag_curah: dataPungutan.ur_flag_curah || "",
      });
    }
  }, [loading, dataPungutan]);

  async function fetchData() {
    setLoading(true);
    const query: { [key: string]: string } = {};
    for (const [key, value] of Object.entries(params)) {
      query[key] = value;
    }
    try {
      const result = await getDataPungutan(query);

      setDataPungutan(result.data);
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
        <div className="flex space-x-4 items-center">
          <CustomFormSelect
            control={form.control}
            name="ur_incoterm"
            label="Incoterms"
            options={opt_incoterms}
            disabled={true}
            isRequired={true}
          />
          <CustomFormSelect
            control={form.control}
            name="ur_valuta"
            label="Valuta"
            options={opt_valuta}
            disabled={true}
            isRequired={true}
          />
          <CustomFormField
            control={form.control}
            name="nilai_kurs"
            label="Kurs"
            isRequired={true}
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
          <Button className="bg-[#102D61] hover:bg-[#14284f] mt-8">
            <RefreshCcw color="#FFFFFF" />
          </Button>
        </div>
        <div className="flex space-x-4 items-center">
          <CustomFormField
            control={form.control}
            name="nilai_incoterm"
            label="Nilai"
            isRequired={true}
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
          <p className="mt-6">+</p>
          <CustomFormField
            control={form.control}
            name="biaya_tambahan"
            label="Biaya Tambahan"
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
          <p className="mt-6">-</p>
          <CustomFormField
            control={form.control}
            name="biaya_pengurang"
            label="Biaya Pengurang"
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
          <p className="mt-6">+</p>
          <CustomFormField
            control={form.control}
            name="tarif_vd"
            label="Voluntary Declaration"
          >
            {(field) => <Input {...field} value={field.value as string} />}
          </CustomFormField>
          <p className="mt-6">=</p>
          <CustomFormField control={form.control} name="fob" label="Nilai FOB">
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <CustomFormSelect
            control={form.control}
            name="ur_asuransi"
            label="Asuransi Bayar di"
            options={opt_asuransi}
            disabled={true}
          />
          <CustomFormField
            control={form.control}
            name="nilai_asuransi"
            label="Asuransi"
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="freight"
            label="Freight"
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <CustomFormField
            control={form.control}
            name="nilai_pabean"
            label="CIF"
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="nilai_pabean_idr"
            label="CIF Rp"
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="berat_kotor"
            label="Bruto"
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="berat_bersih"
            label="Netto"
          >
            {(field) => (
              <Input {...field} value={field.value as string} disabled />
            )}
          </CustomFormField>
          <CustomFormSelect
            control={form.control}
            name="ur_flag_curah"
            label="Flag Kontainer"
            options={opt_kontainer}
            disabled={true}
            isRequired={true}
          />
        </div>
        <div className="flex justify-center mt-16 space-x-4">
          <Button className="bg-yellow-500">Kelengkapan Data</Button>
          <Button className="bg-blue-500 text-white">Simpan</Button>
        </div>
      </form>
    </Form>
  );
};

export default DataPungutan;
