import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const TenantForm = ({ onSubmit, tenants }) => {
  const [form, setForm] = useState({ name: '', phone: '', secondaryPhone: '', aadhar: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(form);
    setForm({ name: '', phone: '', secondaryPhone: '', aadhar: '' });
  };

  return (
    <>
      <h2 className="text-xl font-semibold">Add Tenant</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Name</Label>
          <Input name="name" value={form.name} onChange={handleChange} />
        </div>
        <div>
          <Label>Phone No</Label>
          <Input name="phone" value={form.phone} onChange={handleChange} />
        </div>
        <div>
          <Label>Secondary Phone No</Label>
          <Input name="secondaryPhone" value={form.secondaryPhone} onChange={handleChange} />
        </div>
        <div>
          <Label>Aadhar</Label>
          <Input name="aadhar" value={form.aadhar} onChange={handleChange} />
        </div>
      </div>
      <Button onClick={handleSubmit}>Add Tenant</Button>

      <h3 className="text-lg font-medium mt-6">Tenants List</h3>
      <ul className="list-disc pl-6">
        {tenants.map((tenant) => (
          <li key={tenant._id}>
            {tenant.name} - {tenant.phone}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TenantForm;
