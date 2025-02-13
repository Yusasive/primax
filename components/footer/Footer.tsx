import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaFacebook, FaXTwitter, FaGoogle } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full bg-[#12002b] px-8 py-20 md:px-52">
      <footer className="bg-base-200/60 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-20">
          <div>
            <div className="flex items-center text-4xl justify-center sm:justify-start gap-2 font-bold">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.6745 16.9224L12.6233 10.378C12.2167 9.85117 11.4185 9.8611 11.0251 10.3979L6.45728 16.631C6.26893 16.888 5.96935 17.0398 5.65069 17.0398H3.79114C2.9635 17.0398 2.49412 16.0919 2.99583 15.4336L11.0224 4.90319C11.4206 4.38084 12.2056 4.37762 12.608 4.89668L20.9829 15.6987C21.4923 16.3558 21.024 17.3114 20.1926 17.3114H18.4661C18.1562 17.3114 17.8638 17.1677 17.6745 16.9224ZM12.5866 15.5924L14.8956 18.3593C15.439 19.0105 14.976 20 14.1278 20H9.74075C8.9164 20 8.4461 19.0586 8.94116 18.3994L11.0192 15.6325C11.4065 15.1169 12.1734 15.0972 12.5866 15.5924Z"
                  fill="#623eca"
                />
              </svg>
              <span className="text-[#623eca]">Primax</span>
            </div>
            <div className="space-y-6">
              <p className="text-sm  text-center sm:text-left mt-2">
                Our mission is clear: to create boundless possibilities through
                financial innovation for the 1bn+ people across the continent.
              </p>
              <p className="text-sm  text-center sm:text-left mt-2">
                Primax operates as a financial technology company, not a bank.
                Our partner banks, which hold valid banking licenses, provide
                banking services. The debit cards we offer are issued by these
                partner banks under licenses granted by Visa and MasterCard,
                allowing you to use them at any location that accepts Visa and
                MasterCard debit cards.
              </p>
            </div>
          </div>

          <nav className="text-base-content flex flex-col text-center sm:text-left text-white space-y-4">
            <h6 className="text-lg font-medium mb-4">Products</h6>
            <div>
              <Link href="#" className="link link-hover">
                Cashpin™
              </Link>
            </div>
            <Link href="#" className="link link-hover">
              Virtual cards
            </Link>
            <Link href="#" className="link link-hover">
              Payment Link for Business
            </Link>
          </nav>

          <nav className="text-base-content flex flex-col text-center sm:text-left text-white space-y-4">
            <h6 className="text-lg font-medium mb-4">Resources</h6>
            <Link href="#" className="text-sm font-normal">
              Blog post
            </Link>
            <div>
              <Link href="#" className="link link-hover">
                FAQS
              </Link>
            </div>
            <Link href="#" className="link link-hover">
              About Us
            </Link>
            <Link href="#" className="link link-hover">
              Contact Us
            </Link>
          </nav>

          <nav className="text-base-content flex flex-col text-center sm:text-left text-white space-y-4">
            <h6 className="text-lg font-medium mb-4">Company</h6>
            <Link href="#" className="text-sm font-normal">
              Privacy Policy
            </Link>
            <div>
              <Link href="#" className="link link-hover">
                Terms & Conditions
              </Link>
            </div>
            <Link href="#" className="link link-hover">
              Cookies
            </Link>
            <Link href="#" className="link link-hover">
              Information Security Policy
            </Link>
            <Link href="#" className="link link-hover">
              Acceptable Usage Policy
            </Link>
          </nav>

          <nav className="text-base-content flex flex-col text-center sm:text-left text-white space-y-4">
            <h6 className="text-lg font-medium mb-4">Contact</h6>
            <Link href="#" className="text-sm font-normal">
              help@primax.com
            </Link>
            <div>
              <Link href="#" className="link link-hover">
                +2348144556677
              </Link>
            </div>
          </nav>
        </div>
      </footer>

      <footer className="bg-base-200/60 border-base-content/25 px-4 sm:px-10 lg:px-20 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col">
            {" "}
            <p className="text-center sm:text-left text-sm">© Primax 2025</p>
            <p className="text-center sm:text-left text-sm">
              All rights reserved
            </p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-2 sm:mt-0">
            <Link
              href="#"
              className="link text-4xl text-[#8b5cf6] hover:text-[#af8dfc]"
              aria-label="Facebook Link"
            >
              <FaFacebook />
            </Link>
            <Link
              href="#"
              className="link text-4xl text-[#8b5cf6] hover:text-[#af8dfc]"
              aria-label="Instagram Link"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="link text-4xl text-[#8b5cf6] hover:text-[#af8dfc]"
              aria-label="X (Twitter) Link"
            >
              <FaXTwitter />
            </Link>
            <Link
              href="#"
              className="link text-4xl text-[#8b5cf6] hover:text-[#af8dfc]"
              aria-label="LinkedIn Link"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
