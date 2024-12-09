"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import { RefreshCcw } from "lucide-react";

const FormSchema = z.object({
  nomor_pengajuan: z.string(),
});

const DataPungutan = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nomor_pengajuan: "",
    },
  });

  return (
    <Form {...form}>
      <form className="w-full space-y-6">
        <div className="flex space-x-4 items-center">
          <FormField
            control={form.control}
            name="incoterms"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>
                  Incoterms <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="valuta"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>
                  Valuta <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kurs"
            render={() => (
              <FormItem className="flex-1">
                <FormLabel>
                  Kurs <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="bg-[#102D61] hover:bg-[#14284f] mt-8">
            <RefreshCcw color="#FFFFFF" />
          </Button>
        </div>
        <div className="flex space-x-4 items-center">
          <FormField
            control={form.control}
            name="nilai"
            render={() => (
              <FormItem className="flex-1">
                <FormLabel>
                  Nilai <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <p className="mt-6">+</p>
          <FormField
            control={form.control}
            name="biaya_tambahan"
            render={() => (
              <FormItem className="flex-1">
                <FormLabel>Biaya Tambahan</FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <p className="mt-6">-</p>
          <FormField
            control={form.control}
            name="biaya_pengurang"
            render={() => (
              <FormItem className="flex-1">
                <FormLabel>Biaya Pengurang</FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <p className="mt-6">+</p>
          <FormField
            control={form.control}
            name="voluntary_declaration"
            render={() => (
              <FormItem className="flex-1">
                <FormLabel>Voluntary Declaration</FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <p className="mt-6">=</p>
          <FormField
            control={form.control}
            name="nilai_fob"
            render={() => (
              <FormItem className="flex-1">
                <FormLabel>Nilai FOB</FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="bayar_di"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Asuransi Bayar di</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="asuransi"
            render={() => (
              <FormItem>
                <FormLabel>Asuransi</FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="freight"
            render={() => (
              <FormItem>
                <FormLabel>Freight</FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          <FormField
            control={form.control}
            name="cif"
            render={() => (
              <FormItem>
                <FormLabel>CIF</FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cif_rp"
            render={() => (
              <FormItem>
                <FormLabel>CIF Rp</FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bruto"
            render={() => (
              <FormItem>
                <FormLabel>Bruto</FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Netto"
            render={() => (
              <FormItem>
                <FormLabel>Netto</FormLabel>
                <FormControl>
                  <Input readOnly />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="flag_kontainer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Flag Kontainer <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
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
