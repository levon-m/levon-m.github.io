import { useState, FormEvent } from 'react'
import { PageHeader } from '../components/common/SectionTitle'
import Card from '../components/common/Card'

const socialLinks = [
  {
    name: 'GitHub',
    // CUSTOMIZE: Add your GitHub URL
    url: 'https://github.com/levon-m',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    // CUSTOMIZE: Add your LinkedIn URL
    url: 'https://linkedin.com/in/levon-melkonyan',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    // CUSTOMIZE: Add your YouTube URL
    url: 'https://youtube.com/@levon-m',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'SoundCloud',
    // CUSTOMIZE: Add your SoundCloud URL
    url: 'https://soundcloud.com/levon-m',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.052-.1-.084-.1zm-.899 1.256c-.057 0-.094.034-.101.1l-.142 1.098.142 1.098c.007.066.044.1.101.1.057 0 .094-.034.101-.1l.178-1.098-.178-1.098c-.007-.066-.044-.1-.101-.1zm1.833-.974c-.066 0-.109.042-.116.11l-.21 1.872.21 1.825c.007.068.05.11.116.11.066 0 .109-.042.116-.11l.233-1.825-.233-1.872c-.007-.068-.05-.11-.116-.11zm.896-.44c-.073 0-.124.05-.131.12l-.195 2.192.195 2.145c.007.07.058.12.131.12.073 0 .124-.05.131-.12l.218-2.145-.218-2.192c-.007-.07-.058-.12-.131-.12zm.895-.345c-.08 0-.138.057-.145.138l-.181 2.417.181 2.37c.007.08.065.137.145.137.08 0 .138-.057.145-.138l.203-2.37-.203-2.417c-.007-.08-.065-.137-.145-.137zm.896-.25c-.088 0-.152.063-.159.153l-.167 2.547.167 2.5c.007.09.071.152.159.152.088 0 .152-.063.159-.153l.186-2.5-.186-2.546c-.007-.09-.071-.153-.159-.153zm.896-.162c-.095 0-.166.07-.173.17l-.152 2.589.152 2.542c.007.1.078.17.173.17.095 0 .166-.07.173-.17l.17-2.542-.17-2.589c-.007-.1-.078-.17-.173-.17zm.893-.094c-.102 0-.18.078-.188.188l-.138 2.563.138 2.516c.007.11.086.188.188.188.102 0 .18-.078.188-.188l.153-2.516-.153-2.563c-.007-.11-.086-.188-.188-.188zm.896-.032c-.11 0-.195.085-.203.203l-.123 2.475.123 2.428c.007.12.093.203.203.203.11 0 .195-.084.203-.203l.138-2.428-.138-2.475c-.007-.12-.093-.203-.203-.203zm3.678.16c-.19 0-.347.12-.4.293-.62-.44-1.38-.694-2.21-.72-.097 0-.194.066-.194.18v5.192c0 .11.078.188.18.203h2.624c1.07 0 1.94-.87 1.94-1.94s-.87-1.94-1.94-1.94c-.19 0-.37.03-.54.08zm-2.796-.04c-.117 0-.21.093-.218.218l-.109 2.39.109 2.344c.007.127.1.22.218.22.117 0 .21-.093.218-.22l.122-2.344-.122-2.39c-.007-.127-.1-.218-.218-.218zm-.896.055c-.125 0-.225.1-.233.233l-.094 2.22.094 2.172c.007.135.108.233.233.233.125 0 .225-.1.233-.233l.105-2.172-.105-2.22c-.007-.135-.108-.233-.233-.233z" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // In a real implementation, you'd send this to a backend or email service
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Contact"
          subtitle="Get in touch or find me online"
          backTo="/"
          backLabel="Home"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-8 opacity-0 animate-slide-up animate-delay-100">
            {/* Email */}
            <Card>
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="font-mono text-gray-500">//</span> Email
              </h2>
              <a
                href="mailto:levon@example.com"
                className="text-accent hover:text-accent-light transition-colors font-mono"
              >
                {/* CUSTOMIZE: Add your email */}
                levon@example.com
              </a>
              <p className="mt-2 text-sm text-gray-400">
                Best way to reach me for collaborations or questions.
              </p>
            </Card>

            {/* Social Links */}
            <Card>
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="font-mono text-gray-500">//</span> Find Me Online
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-surface-dark rounded-lg text-gray-300 hover:text-white hover:bg-surface-light border border-transparent hover:border-gray-700 transition-all group"
                  >
                    <span className="text-gray-400 group-hover:text-accent transition-colors">
                      {link.icon}
                    </span>
                    <span className="font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="opacity-0 animate-slide-up animate-delay-200">
            <Card>
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="font-mono text-gray-500">//</span> Send a Message
              </h2>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-accent text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Thanks for reaching out!
                  </h3>
                  <p className="text-gray-400">
                    This form doesn't actually send yet, but in production it would
                    email me your message. Feel free to use the email link instead!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', message: '' })
                    }}
                    className="mt-4 text-accent hover:text-accent-light transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-surface-dark border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-surface-dark border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-surface-dark border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                      placeholder="What's on your mind?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface transition-colors"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    This form is a demo. For now, please email me directly.
                  </p>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
