// 2. FIXED RoleBasedFilter.tsx - Remove bg-card styling that may cause issues
import { Badge } from "@/components/ui/badge";

const roles = [
  "Founders",
  "Sales Leaders", 
  "Operations Managers",
  "Marketing Teams",
  "Service Delivery"
];

export const RoleBasedFilter = () => {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm text-slate-600 mb-6">For:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {roles.map((role, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-sm px-4 py-2 border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 transition-colors duration-300 cursor-pointer"
              >
                {role}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
