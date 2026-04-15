import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

export function initGsapClient() {
  if (isRegistered || typeof window === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  isRegistered = true;
}

export { gsap, ScrollSmoother, ScrollTrigger };
