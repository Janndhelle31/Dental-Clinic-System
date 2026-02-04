import { FileText, Calendar, DollarSign, AlertTriangle, Download } from 'lucide-react';

interface TreatmentCardProps {
  treatment: {
    id: string;
    date: string;
    procedure: string;
    tooth?: string;
    dentist: string;
    cost: number;
    notes: string;
    followUpDate?: string;
    documents?: string[];
  };
}

export default function TreatmentCard({ treatment }: TreatmentCardProps) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{treatment.procedure}</h3>
          {treatment.tooth && (
            <span className="mt-1 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              Tooth {treatment.tooth}
            </span>
          )}
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Cost</div>
          <div className="text-xl font-bold text-gray-900">${treatment.cost}</div>
        </div>
      </div>

      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <div className="flex items-center space-x-3">
          <div className="rounded-lg bg-gray-100 p-2">
            <Calendar className="h-5 w-5 text-gray-600" />
          </div>
          <div>
            <div className="text-sm text-gray-500">Date</div>
            <div className="font-medium text-gray-900">
              {new Date(treatment.date).toLocaleDateString()}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="rounded-lg bg-purple-100 p-2">
            <FileText className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <div className="text-sm text-gray-500">Performed by</div>
            <div className="font-medium text-gray-900">{treatment.dentist}</div>
          </div>
        </div>
      </div>

      {treatment.notes && (
        <div className="mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <AlertTriangle className="h-4 w-4" />
            <span>Notes</span>
          </div>
          <p className="mt-1 rounded-lg bg-gray-50 p-3 text-sm">{treatment.notes}</p>
        </div>
      )}

      {treatment.followUpDate && (
        <div className="mb-4 rounded-lg bg-yellow-50 p-4">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-yellow-600" />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-yellow-800">Follow-up Required</h4>
              <p className="mt-1 text-sm text-yellow-700">
                Scheduled for {new Date(treatment.followUpDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}

      {treatment.documents && treatment.documents.length > 0 && (
        <div className="border-t pt-4">
          <h4 className="mb-2 text-sm font-medium text-gray-900">Documents</h4>
          <div className="space-y-2">
            {treatment.documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">{doc}</div>
                    <div className="text-xs text-gray-500">PDF • 2.4 MB</div>
                  </div>
                </div>
                <button className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800">
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 flex justify-end space-x-3 border-t pt-4">
        <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          View Details
        </button>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
          Request Records
        </button>
      </div>
    </div>
  );
}