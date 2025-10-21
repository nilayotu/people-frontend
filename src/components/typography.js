import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const components = {
    h1: (props) => {
        return (
            <h1 {...props} className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
                {props.children}
            </h1>
        );
    },
    h2: (props) => {
        return (
            <h2 {...props} className="scroll-m-20 text-3xl font-semibold first:mt-0 mb-2">
                {props.children}
            </h2>
        );
    },
    h3: (props) => {
        return (
            <h3 {...props} className="scroll-m-20 text-2xl font-semibold">
                {props.children}
            </h3>
        );
    },
    h4: (props) => {
        return (
            <h4 {...props} className="scroll-m-20 text-xl font-semibold">
                {props.children}
            </h4>
        )
    },
    p: (props) => (
        <p {...props} className="leading-7 [&:not(:last-child)]:mb-4">
            {props.children}
        </p>
    ),
    ul: (props) => (
        <ul {...props} className="mb-4 ml-6 list-disc [&>li]:mt-2">
            {props.children}
        </ul>
    ),
    ol: (props) => (
        <ol {...props} className="mb-4 ml-6 list-decimal [&>li]:mt-2">
            {props.children}
        </ol>
    ),
    a: (props) => (
        <Link
            target="_blank"
            className="underline hover:no-underline focus-visible:border"
            {...props}
        >
            {props.children}
            <MoveUpRight className="inline size-3.5 -translate-y-1/3" />
        </Link>
    ),
    img: (props) => (
        <img className={cn("w-full h-auto mx-auto object-contain", props.className)} loading="lazy" decoding="async" {...props} />
    ),
    table: (props) => (
        <Table className="border my-4">
            {props.children}
        </Table>
    ),
    thead: (props) => (
        <TableHeader>
            {props.children}
        </TableHeader>
    ),
    tbody: (props) => (
        <TableBody>
            {props.children}
        </TableBody>
    ),
    tr: (props) => (
        <TableRow>
            {props.children}
        </TableRow>
    ),
    th: (props) => (
        <TableHead>
            {props.children}
        </TableHead>
    ),
    td: (props) => (
        <TableCell>
            {props.children}
        </TableCell>
    ),
}

export default components;