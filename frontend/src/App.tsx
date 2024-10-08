import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/home/HomePage";
import { LoginPage } from "@/pages/login/LoginPage";
import { PrivateRoutes } from "@/routes/private-routes";
import { UnprotectedRoutes } from "@/routes/unprotect-routes";
import { NotFound } from "@/pages/not-found/NotFound";
import { MyInfo } from "@/pages/my-info/MyInfoPage";
import { EmployeesPage } from "@/pages/employees/EmployeesPage";
import { ReportsPage } from "@/pages/reports/ReportsPage";
import { FilesPage } from "@/pages/files/FilesPage";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { MyInfoLayout } from "./layouts/MyInfoLayout";
import { AssetsPage } from "./pages/assets/AssetsPage";
import { TrainingPage } from "./pages/training/TrainingPage";
import { TasksPage } from "./pages/tasks/TasksPage";
import { GoalPage } from "./pages/goals/goals";
import { DocumentLayout } from "./layouts/DocumentLayout";
import { NewEmployeePage } from "./pages/employees/NewEmployeePage";
import { DepartmentPage } from "./pages/department/DepartmentPage";
import { ProfilesPage } from "./pages/profiles/profiles";


function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<UnprotectedRoutes />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<PrivateRoutes />}>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route element={<MyInfoLayout />} >
            <Route path="/my-info" element={<MyInfo />} />
            <Route path="/my-info/assets" element={<AssetsPage />} />
            <Route path="/my-info/training" element={<TrainingPage />} />
            <Route path="/my-info/tasks" element={<TasksPage />} />
            <Route path="/my-info/goals" element={<GoalPage />} />
          </Route>
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/departments" element={<DepartmentPage />} />
          <Route path="/profiles" element={<ProfilesPage />} />
          <Route path="/employees/new" element={<NewEmployeePage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route element={<DocumentLayout />}>
            <Route path="/documents" element={<FilesPage />} />
          </Route>
        </Route>

      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
