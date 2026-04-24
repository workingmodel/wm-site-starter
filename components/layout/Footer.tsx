import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="relative z-10 ml-12 mr-12 mt-12">
      <div className="px-8 md:px-16 lg:px-24 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <a
              href="https://www.workingmodel.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-highlight"
            >
              <p className="text-base md:text-sm text-center">
                Brought to you by Working Model Inc
              </p>
            </a>
            <img
              src="/imgs/wm-logo-blk.svg"
              alt="Working Model"
              className="w-12 mx-auto mt-5"
            />
          </div>

          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

