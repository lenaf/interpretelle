import * as React from "react"
import { useState } from "react";
import { colors } from "../colors.css"
import EmailModal from "./modal";
import Spinner from "./spinner";
import {
  Box,
  Button,
  ButtonList,
  Container,
  Flex,
  Heading,
  HomepageImage,
  HomepageLink,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui"



export default function Contact() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div style={{ background: colors.dark, color: colors.background }}>
      <Container>
        <Section >
          <Flex gap={4} variant="responsive" alignItems='start'>
            <Box width="half">
              <Flex gap={0} variant="column" alignItems='start' className="justify-end">
                <h1 className={'text-4xl mb-8 font-extrabold'}>
                  Get your quote today
                </h1>
                <iframe name="dummyframe" id="dummyframe" style={{ display: "none" }}></iframe>
                <form
                  // action=
                  // method="POST"
                  target="dummyframe"
                  onSubmit={(event) => {
                    setIsLoading(true);
                    var url = "https://getform.io/f/e35c13d2-44a9-460a-8370-90b2a55955af";
                    var request = new XMLHttpRequest();
                    request.open('POST', url, true);
                    request.onload = function () { // request successful
                      // we can use server response to our request now
                      setIsSuccessModalOpen(true);
                      setIsLoading(false);
                    };

                    request.onerror = function () {
                      // request failed
                    };
                    request.send(new FormData(event.target as any)); // create FormData from form that triggered event
                    event.preventDefault();

                  }}
                >
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <label className="block mb-2 text-sm font-medium">
                      Name
                      <input
                        type="text"
                        name="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John Doe"
                        required
                      />
                    </label>
                    <label className="block mb-2 text-sm font-medium ">
                      Email
                      <input
                        type="email"
                        name="_replyto"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="john@doe.com"
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">
                      Select a service
                      <select
                        name="service"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="1">1 hour</option>
                        <option value="2">2 hour</option>
                        <option value="3">3 hour</option>
                      </select>
                    </label>
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium">
                      Your message (optional)
                      <textarea
                        id="message" rows={4}
                        name="message"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your thoughts here...">
                      </textarea>
                    </label>
                  </div>
                  <Button as='button' type="submit" variant='primary' disabled={isLoading}>
                    {!isLoading ? 'Submit' : <Spinner />}
                  </Button>
                </form>
              </Flex>
            </Box>
            <Box width="half">
              <Flex gap={0} variant="column" alignItems='start' className="justify-end">
                <h1 className={'text-4xl mb-8 font-extrabold'}>
                  Get in touch
                </h1>
                <div className="text-lg mb-4">Send us an email and well get back to you in 1-2 business days!</div>
                <h1 className={'text-2xl font-extrabold'}>
                  hola@interpretelle.com
                </h1>
              </Flex>
            </Box>
          </Flex>
        </Section>
      </Container>
      <EmailModal isOpen={isSuccessModalOpen} setIsOpen={setIsSuccessModalOpen} />
    </div>
  )
}

