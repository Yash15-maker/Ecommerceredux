import React from "react";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div class="p-4 shadow-lg">
        <div class="flex justify-between">
          <div
            class="flex-none w-14 h-10 text-center mt-3 font-bold font-mono text-2xl hover:not-italic"
            onClick={() => {
              navigate("/");
            }}
          >
            Redux{" "}
          </div>
          <div class="flex-initial w-32 mt-3">Cart</div>
          <div class="flex-initial w-32 mt-3">Sign In</div>
        </div>
      </div>
    </div>
  );
}
