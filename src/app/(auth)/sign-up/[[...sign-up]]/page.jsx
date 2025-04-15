import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 px-4 py-10">
          <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col-reverse lg:flex-row">
            {/* Left: Clerk Sign In Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10">
              <div className="w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                  Register to SpendWise
                </h2>
                <div className="rounded-xl border border-gray-200 shadow p-6 bg-white">
                  <SignUp
                    appearance={{
                      elements: {
                        card: "shadow-none",
                        formButtonPrimary:
                          "bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg",
                      },
                    }}
                  />
                </div>
                <p className="mt-6 text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <a
                    href="/sign-in"
                    className="text-purple-900 hover:underline font-medium"
                  >
                    Login Here
                  </a>
                </p>
              </div>
            </div>
    
            {/* Right: Illustration & App Info */}
            <div className="w-full lg:w-1/2 bg-gradient-to-tr from-indigo-600 via-purple-600 to-blue-500 text-white p-8 flex flex-col justify-center items-center">
              <h1 className="text-4xl font-extrabold mb-4 text-center">Welcome to SpendWise 🧾</h1>
              <p className="text-lg text-center font-light mb-6 max-w-md">
                Track your expenses, set smart budgets, and take control of your finances with ease.
              </p>
              <img
                src="./login_svg.svg"
                alt="Finance Illustration"
                className="w-1/4 max-w-sm rounded-lg"
              />
            </div>
          </div>
        </section>
  );
}