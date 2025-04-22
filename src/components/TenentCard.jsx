import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const TenantCard = ({ tenant, rentValue, onRentChange, onTogglePayment }) => (
  <div className="space-y-4 border p-4 rounded-xl">
    <div className="flex items-center justify-between">
      <Label className="font-semibold text-lg">{tenant.name}</Label>
      <div className="flex items-center space-x-2">
        <Label>Paid</Label>
        <Switch
          checked={tenant.rentHistory.at(-1)?.paid || false}
          onCheckedChange={onTogglePayment}
        />
      </div>
    </div>
    <Input
      type="number"
      placeholder="Enter rent amount"
      value={rentValue}
      onChange={(e) => onRentChange(e.target.value)}
    />
    <div>
      <h4 className="font-medium">Rent History:</h4>
      <ul className="list-disc pl-5">
        {tenant.rentHistory.map((entry, i) => (
          <li key={i}>
            {entry.date} - ₹{entry.amount} {entry.paid ? '(Paid)' : '(Unpaid)'}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default TenantCard;
